import 

export default function chuckerster(someArr){
  newArr = someArr.sort(function (a, b) {
    let aTotalTime = 'x';
    let aTimeRemaining = 'x';
    let bTotalTime = 'x';
    let bTimeRemaining = 'x';

    let aScore = ((1-(aTimeRemaining/aTotalTime)) * .5) + ((a.priority / 5) * .5)
    let bScore = ((1-(bTimeRemaining/bTotalTime)) * .5) + ((b.priority / 5) * .5)

    return a - b
  })
}
