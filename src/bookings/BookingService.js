class BookingService{
  constructor(repository){
    this.repository = repository;
  }

  findAllBookings(){
    return this.repository.findAll();
  }
}