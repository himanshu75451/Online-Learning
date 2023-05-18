import { studentData } from "../index";
global.score = 1;

describe("Object properties and expected return", function () {
  let data = studentData(
    "Vivek",
    "Agarwal",
    38,
    [50, 60, 70],
    "Singing",
    "Coding",
    "Meditating"
  );
  let data2 = studentData("Will", "Smith", 54, [48, 49, 50], "A", "B", "C");
 

  test("object returned by studentData to have properties", function () {
    expect(data && typeof data === "object").toBe(true);
    expect(data).toHaveProperty("fullName");
    expect(data).toHaveProperty("age");
    expect(data).toHaveProperty("hobbies");
    expect(data).toHaveProperty("getInfo");
    expect(data).toHaveProperty("getResult");
    expect(data2 && typeof data2 === "object").toBe(true);
    expect(data2).toHaveProperty("fullName");
    expect(data2).toHaveProperty("age");
    expect(data2).toHaveProperty("hobbies");
    expect(data2).toHaveProperty("getInfo");
    expect(data2).toHaveProperty("getResult");
    global.score += 1;
  });

  test("object returned by studentData to have methods", function () {
    expect(typeof data.getInfo).toBe("function");
    expect(typeof data.getResult).toBe("function");
    expect(typeof data2.getInfo).toBe("function");
    expect(typeof data2.getResult).toBe("function");
    global.score += 1;
  });

  test("getInfo method to return proper value", function () {
    expect(data.getInfo()).toBe("Vivek Agarwal's age is 38.");
    expect(data2.getInfo()).toBe("Will Smith's age is 54.");
    global.score += 1;
  });

  test("getResult method to return proper value", function () {
    expect(data.getResult()).toBe("Result: PASS");
    expect(data2.getResult()).toBe("Result: FAIL");
    global.score += 2;
  }); 

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
