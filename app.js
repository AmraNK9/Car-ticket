
//toggle background color
// $('.box').on('click',function(){
//     $(this).toggleClass('red')
// })

const box = document.querySelectorAll('.box');

//assign innerHTml and data seat number in each box
console.log(box.length)
let num_for_col = 1;
box.forEach((ele,i)=>{
   let row_n = ele.parentElement.parentElement.getAttribute('data-row-name');

   let col_n = num_for_col++;
   if(num_for_col>3){
    num_for_col = 1
   }
 
   let seat_number = row_n + col_n
    ele.setAttribute('data-seat-number',seat_number)
    ele.innerHTML = seat_number
})

//toggle background color(red);
box.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        ele.classList.toggle('red')
    })
})

//container hight define
document.querySelector('.container').style.height = (window.innerHeight - 70 )+'px'
console.log(document.querySelector('.container').offsetHeight)
document.querySelector('.scroll-box').style.height = (document.querySelector('.container').offsetHeight-220)+'px'
//Ticket_Booking class define
class Ticket_Booking {
    constructor(name,ph,seat_arr){
        this.name = name;
        this.phone_number = ph;
        this.seat_arr = seat_arr;
    }
    Price() {
        return seat_arr.reduce((total, current) => total + current, 0);
    }
      
}

//varible define 
let customer_Name ='';
let customer_Ph ;

$('.Name').on('change',function(){
    customer_Name = $(this).val()
    console.log(customer_Name)
})
//creat object when sumit btn click
$('.Phone').on('change',function(){
    customer_Ph = $(this).val();
    console.log(customer_Ph)
})

//when reset btn click,clear value in input;
$('.reset').on('click',function(){
    $('.Name').val('')
    $('.Phone').val('')
    box.forEach((b)=>{
        b.classList.remove('red')
    })
})


let seat_arr = []

//event listen of each box
const scroll_Box = document.querySelector('.scroll-box');

scroll_Box.addEventListener('click',(e)=>{
    if(e.target.classList[0]=='box'){
        if(e.target.classList[1] == 'red'){
            seat_arr.push(e.target.innerHTML)
        }
        else{
            let index = seat_arr.indexOf(e.target.innerHTML);
            console.log(index)
            seat_arr.splice(index,1)
            console.log(seat_arr)
        }
    }
})

//whtn sumit btn click,ticket_booking object create
$('.sumit').on('click',function(){
    let booking1 = new Ticket_Booking(customer_Name,customer_Ph,seat_arr);
    console.log(booking1.name)
    alert(`Name: ${booking1.name},Phone_number :${booking1.phone_number},seat num: ${seat_arr}`)
})