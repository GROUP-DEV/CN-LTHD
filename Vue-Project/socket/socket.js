
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:1742');
export { socket };