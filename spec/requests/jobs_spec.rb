require 'rails_helper'

describe "Jobs", type: :request do

  describe "GetMethod", type: :request do
    it "gets a list of jobs" do
      user = User.create!(email: "guy@mail.com", password: "asdasd", password_confirmation: "asdasd")
      Job.create!(user_id: user.id, company: 'cool', title: 'SE', status: 'phase two', date_applied: '2000-10-06', last_follow_up: '2000-10-09')
      get '/jobs'
      json = JSON.parse(response.body)
      expect(response).to have_http_status(:ok)
      expect(json.length).to eq 1
    end
  end

  describe "PostMethod", type: :request do
    it "creates a job" do
      user = User.create!(email: "human@mail.com", password: "asdasd", password_confirmation: "asdasd")
      job_params = {
        job: {
          user_id: user.id,
          company: 'best company',
          title: 'SWE',
        }
      }
      post '/jobs', params: job_params
      expect(response).to have_http_status(:ok)
      new_job = Job.first
      expect(new_job.company).to eq('best company')
    end
  end

  describe "DeleteMethod", type: :request do
    it "deletes a job" do
      user = User.create!(email: "hi@mail.com", password: "asdasd", password_confirmation: "asdasd")
      Job.create!(user_id: user.id, company: 'delete', title: 'SE', status: 'phase two', date_applied: '2000-10-06', last_follow_up: '2000-10-09')
      id = Job.first.id
      puts "first", Job.first.company
      job1 = Job.find(id)
      # puts "j", job1.company
      delete job1
      # puts "first2", Job.first.id
    end
  end

end