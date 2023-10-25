require 'rails_helper'

RSpec.describe "Arcades", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/arcades/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /index" do
    it "returns http success" do
      get "/arcades/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/arcades/show"
      expect(response).to have_http_status(:success)
    end
  end

end
