class Api::GreetingMessageController < ApplicationController
  def index
    @message = Greeting.order(Arel.sql('RANDOM()')).limit(1).take
    render json: { data: @message, status: 'success' }, status: :ok
  end
end
