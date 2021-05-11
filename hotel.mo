import Nat "mo:stdlib/nat";

actor hotel {
    var rate = 100;

    public func setRate(newRate : Nat) {
	    rate := newRate;
    };

    public func getRate(location : Text) : async Nat {
	    return rate;
    };

    public func registerWith(agencyId : Text) : async Text {
        let a = actor(agencyId) : actor { registerHotel : (actor{}) -> async Nat };
        let n = await a.registerHotel(hotel);
	"Successfully registered as hotel no. " # Nat.toText n # ".";
    }
};