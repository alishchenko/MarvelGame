class GameManager {
    constructor(soket, user1, user2, room) {
        this.soket = soket;
        this.user1 = user1;
        this.user2 = user2;
        this.room = room;
    }

    ping() {
        this.soket.to(this.room).emit("ping");
    }


}

module.exports = GameManager;