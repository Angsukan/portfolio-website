import math

def calculate_mortgage(principal, annual_rate, years, monthly_payment_override=None, annual_overpayment_pct=0):
    monthly_rate = annual_rate / 100 / 12
    total_months = years * 12
    
    # Standard monthly payment calculation
    if monthly_rate > 0:
        standard_payment = principal * (monthly_rate * (1 + monthly_rate)**total_months) / ((1 + monthly_rate)**total_months - 1)
    else:
        standard_payment = principal / total_months
        
    payment = monthly_payment_override if monthly_payment_override else standard_payment
    
    balance = principal
    total_interest = 0
    months = 0
    
    # Track annual overpayment limit (10% of balance at start of year for Scenario 1)
    # The prompt says 10% overpayment without penalty. Usually this means 10% of the balance per year.
    # For Scenario 1, the user didn't specify an overpayment amount, just the limit.
    # To make a fair comparison of "paying it off", I'll assume they pay the standard in S1, 
    # but I'll also calculate a version where they maximize S1 overpayment to see the difference.
    # Actually, the user asked to compare the *scenarios* as described.
    # S2 is explicitly "pay 3000 every month". S1 is just "Allow 10%".
    # I will assume S1 = Standard Payment for the primary comparison, but mention the potential.
    
    while balance > 0 and months < 1200: # 100 year cap safety
        interest_this_month = balance * monthly_rate
        principal_this_month = payment - interest_this_month
        
        if balance + interest_this_month < payment:
            total_interest += interest_this_month
            balance = 0
            months += 1
            break
            
        balance -= principal_this_month
        total_interest += interest_this_month
        months += 1
        
    return {
        "standard_payment": standard_payment,
        "actual_payment": payment,
        "total_interest": total_interest,
        "months_to_close": months,
        "years_to_close": months / 12
    }

# Parameters
principal = 180000
years = 26

# Scenario 1: 4 years fixed at 3% (we'll calculate the full term at 3% for comparison, or note the 4 year mark)
# User wants to know "how long to close", implying we keep the rate or assume it stays.
s1 = calculate_mortgage(principal, 3.0, years)

# Scenario 2: Variable 3.65%, pay 3000/mo
s2 = calculate_mortgage(principal, 3.65, years, monthly_payment_override=3000)

print(f"Scenario 1: {s1}")
print(f"Scenario 2: {s2}")
