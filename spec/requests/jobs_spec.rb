require 'rails_helper'

describe "Jobs", type: :request do
  before :each do 
    @user1 = User.create!(email: "test1@mail.com", password: "password", password_confirmation: "password")
    @user2 = User.create!(email: "test2@mail.com", password: "password", password_confirmation: "password")
    sign_in @user1
    Job.create!(user_id: @user2.id, company: 'Company 3', title: 'Software Engineer', status: 'phase 1', date_applied: '2000-10-01', last_follow_up: '2000-10-09')
    Job.create!(user_id: @user1.id, company: 'Company 1', title: 'Software Engineer', status: 'just applied', date_applied: '2000-10-06', last_follow_up: '2000-10-09')
    Job.create!(user_id: @user1.id, company: 'Company 2', title: 'Frontend Engineer', status: 'phase 1', date_applied: '2000-10-01', last_follow_up: '2000-10-09')
    Job.create!(user_id: @user1.id, company: 'Company 3', title: 'Software Engineer', status: 'phase 1', date_applied: '2000-10-01', last_follow_up: '2000-10-09')

    @jobs = Job.all
  end

  describe "Get Method" do
    it "gets a list of jobs" do
      get "/jobs"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json.length).to eq 3
    end

    it "gets a list of jobs filtered by role" do
      get "/jobs", params: { role: "Software Engineer" }
      json = JSON.parse(response.body)
      expect(json.length).to eq 2
    end

    it "gets a list of jobs filtered by status" do
      get "/jobs", params: { status: "phase 1" }
      json = JSON.parse(response.body)
      expect(json.length).to eq 2
    end
  end

  describe "Post Method" do
    it "creates a job" do
      job_params = {
        job: {
          user_id: @user1.id,
          company: 'best company',
          title: 'Software Engineer',
          status: 'just applied', 
          date_applied: '2021-1-06', 
          last_follow_up: '2021-1-09'
        }
      }
      post "/jobs", params: job_params
      new_job = Job.last
      expect(response).to have_http_status(:ok)
      expect(new_job.company).to eq 'best company'
      expect(@jobs.length).to eq 5
    end

    it "throws error on invalid params" do
      job_params = {
        job: {
          user_id: @user1.id,
          company: 'best company',
          title: 'Software Engineer',
        }
      }
      post "/jobs", params: job_params
      expect(response).to have_http_status(422)
      expect(@jobs.length).to eq 4
    end
  end

  describe "Delete Method" do
    it "deletes a job" do
      id = Job.first.id
      delete "/jobs/#{id}"
      expect(@jobs.length).to eq 3
      expect(Job.first.id).to eq(id+1)
    end
  end

  describe "Put Method" do
    it "updates a job" do
      first = Job.first
      params = {
        job: {
          user_id: first.user_id, 
          company: first.company, 
          title: first.title, 
          status: 'Phase 2', 
          date_applied: first.date_applied, 
          last_follow_up: "2000-10-31"
        }
      }
      put "/jobs/#{first.id}", params: params
      edited = Job.first
      expect(edited.status).to eq "Phase 2"
      expect(edited.last_follow_up.to_formatted_s(:iso8601)).to eq "2000-10-31"
    end
  end

  describe "Status Metrics" do
    it "gets a list of job statuses" do
      get "/status_metrics"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json["statuses"]["just applied"]).to eq 1
      expect(json["statuses"]["phase 1"]).to eq 2
      expect(json.length).to eq 2
      expect(json["total_applications"]).to eq 3
    end
  end

  describe "Roles Count" do
    it "gets a list of job roles" do
      get "/roles_count"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json.length).to eq 2
    end
  end
end