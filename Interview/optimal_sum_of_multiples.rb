# Sum of all multiples of 3 or 5 less than 1000, and how you calculated it (use any language or mathematical formula you want).
 
def sum_of_multiples(num=1000) 
    i = 0
    sum = 0
    while i < num do
      if i % 3 == 0 || i % 5 == 0 
        sum += i 
      end
      i += 1
    end
    sum
end
  
sum_of_multiples()
# 233168 