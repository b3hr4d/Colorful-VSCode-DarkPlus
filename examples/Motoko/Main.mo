import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

persistent actor SimpleActor {
  var counter : Nat = 0;

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!"
  };

  public func incrementCounter() : async Nat {
    counter += 1;
    Debug.print("Counter incremented to: " # Nat.toText(counter));
    return counter
  };

  public query func getCounter() : async Nat {
    return counter
  };

  public func resetCounter() : async () {
    counter := 0;
    Debug.print("Counter reset to zero.")
  }
}
