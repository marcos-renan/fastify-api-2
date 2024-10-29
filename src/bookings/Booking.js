//iniciando api de reservas de quartos, sera necessario -> id, roomId, guestName, chekInDate, chekOutPut

const { uuidv4 } = require('uuid');

class Booking {
  constructor( roomId, guestName, chekInDate, chekOutPut) {
    this.id = uuidv4;
    this.roomId = roomId;
    this.guestName = guestName;
    this.chekInDate = chekInDate;
    this.chekOutPut = chekOutPut;
  }
}

module.exports = Booking;