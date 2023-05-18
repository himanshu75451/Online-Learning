function totalPromotedStudents(data) {

  let Promoted = 0;
  let PromotedAvgAge = 0;
  let PromotedUnder15 = 0;
  let PromotedMale = 0;

  let result = data.reduce((acc,item) => {
    if(item.promoted == true){
      Promoted++;
      PromotedAvgAge+=item.age;
      
      if(item.age < 15){
        PromotedUnder15++;
      }
      if(item.gender == "Male"){
        PromotedMale+=item.age;
      }
    }
    acc.totalPromoted = Promoted;
    acc.totalPromotedAvgAge = Math.floor(PromotedAvgAge/Promoted);
    acc.totalPromotedUnder15 = PromotedUnder15;
    acc.totalAgePromotedMale = PromotedMale;
  
    if(item.gender == "Female" && item.promoted == true){
      acc.totalPromotedFemaleAscByAge = acc.totalPromotedFemaleAscByAge || [];
      acc.totalPromotedFemaleAscByAge.push(item);
    }
  acc.totalPromotedFemaleAscByAge.sort((a,b) => {
      return a.age-b.age;
    })
    return acc;
  },{});
  return result;
}

export { totalPromotedStudents };
