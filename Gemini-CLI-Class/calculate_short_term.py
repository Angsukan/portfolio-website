import math

def find_term_for_payment(principal, annual_rate, target_payment):
    monthly_rate = annual_rate / 100 / 12
    # payment = P * (r * (1+r)^n) / ((1+r)^n - 1)
    # Solve for n:
    # payment * ((1+r)^n - 1) = P * r * (1+r)^n
    # payment * (1+r)^n - payment = P * r * (1+r)^n
    # (payment - P * r) * (1+r)^n = payment
    # (1+r)^n = payment / (payment - P * r)
    # n = log(payment / (payment - P * r)) / log(1+r)
    
    n = math.log(target_payment / (target_payment - principal * monthly_rate)) / math.log(1 + monthly_rate)
    return n

principal = 180000
rate = 3.0
target = 3000

months = find_term_for_payment(principal, rate, target)
years = months / 12

# Calculate total interest
total_paid = target * months
total_interest = total_paid - principal

print(f"Months: {months}")
print(f"Years: {years}")
print(f"Total Interest: {total_interest}")
