function UserInfo(name, location) {
    this.name = name;
    this.location = location;
}

function serveFood(food) {
    return `Serving ${food = passed} to ${this.name} in ${this.location}`;
}
function serveIn() {}
function billNote() {}
function generateInVoice() {}

let ans = new UserInfo("himanshu","Banswara");
console.log(ans);
ans.serveFood();

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
