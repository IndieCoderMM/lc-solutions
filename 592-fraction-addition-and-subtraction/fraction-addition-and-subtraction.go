import (
    "fmt"
    "strconv"
)

func fractionAddition(expression string) string {
   n1, d1 := 0, 1  

   size := len(expression)
   i := 0

   for {
    if i >= size {
        break
    }

    sign := 1 
    if expression[i] == '+' || expression[i] == '-' {
        if (expression[i] == '-') {
            sign = -1
        }
        i++
    }

    n2 := 0
    for {
        if i >= size {
            break
        }

        digit, err := strconv.ParseInt(string(expression[i]), 10, 10)
        if err != nil {
            break
        } 
        n2 = n2 * 10 + int(digit) 
        i++ 
        
    }
    n2 *= sign
    i++ 

    d2 := 0
    for {
        if i >= size {
            break
        }

        digit, err := strconv.ParseInt(string(expression[i]), 10, 10)
        if err != nil {
            break 
        }
        d2 = d2 * 10 + int(digit)
        i++
    }

    n1 = n1 * d2 + n2 * d1
    d1 *= d2

    gcdVal := gcd(abs(n1), d1)
    n1 /= gcdVal
    d1 /= gcdVal
   }

   return strconv.Itoa(n1) + "/" + strconv.Itoa(d1)
}

func gcd(a int,b int) int {
   if (b != 0) {
      return gcd(b, a % b);
   } else {
      return a;
   }
}

func abs(a int) int {
    if a > 0 {
        return a
    }

    return a * -1
}