const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
let grumpyHours = 0
let happyHours = 0
// created hours array 
//created grumpy and happy hours vars set both equal to 0

for (const hour of hours) {
	if (hour < 7) {
		grumpyHours += 1
	}
	else {
		happyHours += 1
	}
}
//iterated through array elements if element is < 7
//add a 1 to the grumpy hour var
//if >=7 'anything else' add 1 to happy hours var
console.log(
`I was grumpy on ${grumpyHours}
I was happy on ${happyHours}.`
) //then log a interpolated string with both var