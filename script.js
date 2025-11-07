
function checkAge()
{
    if(age.value)   //.value is an attribute for that value that we are enter
    {
      if(age.value>=18)
      {
        result.innerHTML="Congratzz dear you'r eligible"
        result.style.color="green"
      }
      else if(age.value<=18)
      {
        result.innerHTML="Oops, not eligible dear"
        result.style.color="red"
      }
      else
        {
        result.innerHTML="Hey dear it's invalid value"
        result.style.color="black"
        }
    }
    else{
        result.innerHTML="Please enter a value"
        result.style.color="blue"
    }
}