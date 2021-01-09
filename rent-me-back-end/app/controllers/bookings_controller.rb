class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :update, :destroy]

  # GET /bookings
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  # GET /bookings/1
  def show
    render json: @booking
  end

  # POST /bookings
  def create
  
    @booking = Booking.new(booking_params)
  
    if @booking.save
      @booking.normalize_phone_number
      @booking.save
      render json: @booking, status: :created
    else
      render json: {errors: @booking.errors.full_messages, status: 500}
    end
  end
    
  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
    render json: {message: 'successful deletion'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def booking_params
      params.require(:booking).permit(:startDate, :endDate, :firstName, :lastName, :phoneNumber, :emailAdress, :car_id)
    end
end
 
  
     
   


