let score = 0;

function Solve(a,m){
    console.log(a);
    console.log(m);
    console.log("Input is:\n" +"Andreana`s array: ["+a+"]\n" + "Maria`s array: ["+m+"]");
    
    //Separate sides and convert to string
    //Andreana`s left side
    let a_left=a[0].toString();
    //Andreana`s right side
    let a_rigth=a[1].toString();

    //Maria`s left side
    let m_left=m[0].toString();
    //Maria`s right side
    let m_rigth=m[1].toString();

    //array of digits
    let andrean_input = parseToDigit(a_left,a_rigth);
    let maria_input = parseToDigit(m_left,m_rigth);

    //CompareAndChangeDigit - main Function. In that function i 
    //pass two arreas,compare,increment&dicrement and finally count score
    CompareAndChangeDigits(andrean_input,maria_input);
}

function parseToDigit(left,right){
    //entire output
    let output =[];
    //left output 
    let output_left = [];
    //right output
    let output_right = [];

    //Fill left and right outputs with numbers
    for (var i = 0; i < left.length; i ++) {
        output_left.push(+left.charAt(i));
    }
    output.push(output_left);
    //parse a to lefr and right - Right
    for (var i = 0; i < right.length; i ++) {
        output_right.push(+right.charAt(i));
    }

    //set Entire ouput
    output.push(output_right);
    // console.log("["+output_left+"]  ,  ["+output_right+"]");
    return output;
}   

function CompareAndChangeDigits(andreana,maria){
    //Before
    console.log(andreana);
    console.log(maria);
    let inc_dec = 0;

    for(let k=0; k < 2; k++){// iterrate for 2 array.
        if(andreana[k].length !=maria[k].length){//check if length is diffrenet. if so, console.log(info)
            console.log("Length of andreana and maria must be equal\n"+"Problem in compairing of "+(k+1)+"`s parts");
        }else{//if length of first item of andreana array equal length of first item of maria array,do ->
            console.log((k+1)+" Iterration:\n\n");
            let equal_length = andreana[0].length;
            for(let i =0; i < equal_length; i++){
                // <
                if(andreana[k][i] < maria[k][i]){
                    score++; //increase moves
                    console.log(andreana[k][i]+" < "+ maria[k][i]+". moves did:"+score);
                    inc_dec =maria[k][i]-andreana[k][i];//find the amout for increasing
                    andreana[k][i]+=inc_dec;//set new number
                // =
                }else if(andreana[k][i] == maria[k][i]){
                    console.log(andreana[k][i]+" = "+ maria[k][i]+". moves did:" +score);
                }
                // >
                else{
                    score++;//increase moves
                    console.log(andreana[k][i]+" > "+ maria[k][i]+". moves did:"+score);
                    inc_dec = andreana[k][i]- maria[k][i];//find the amout for decreasing
                    andreana[k][i]-=inc_dec;//set new number
                }
            }
        }
    }
    //Logs
    console.log("\n\nAndreana`s first item = Maria`s first item");
    console.log(andreana[0],maria[0]);
    console.log("Andreana`s second item = Maria`s second item");
    console.log(andreana[1],maria[1]);
    console.log("Total score = "+score);
}

//Inputs
let a = [1234,1523];
let m = [1694,1426];

Solve(a,m);