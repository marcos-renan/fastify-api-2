// classe para persistencia de dados

class BookingRepository{
  constructor(){
    this.bookings = [];
  }

  findAll(){
    return this.bookings;
  }

  create(booking){
    this.bookings.push(booking);
  }
}