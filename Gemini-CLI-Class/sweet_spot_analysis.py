import math

def calculate_stats(principal, annual_rate, monthly_payment):
    monthly_rate = annual_rate / 100 / 12
    balance = principal
    total_interest = 0
    months = 0
    
    while balance > 0 and months < 1200:
        interest_this_month = balance * monthly_rate
        if balance + interest_this_month < monthly_payment:
            total_interest += interest_this_month
            balance = 0
            months += 1
            break
        
        principal_reduction = monthly_payment - interest_this_month
        balance -= principal_reduction
        total_interest += interest_this_month
        months += 1
    
    return months, total_interest

principal = 180000
rate = 3.65
base_payment = 894 # rounded

print(f"{'Monthly Payment':<20} | {'Years':<10} | {'Total Interest':<20} | {'Interest Saved':<20}")
print("-" * 75)

baseline_months, baseline_interest = calculate_stats(principal, rate, base_payment)

for p in range(1000, 3100, 500):
    months, interest = calculate_stats(principal, rate, p)
    saved = baseline_interest - interest
    print(f"€{p:<19} | {months/12:<10.1f} | €{interest:<19,.0f} | €{saved:<19,.0f}")

# Also check a few specific jumps to see marginal gains
print("\nMarginal Gains Analysis:")
p1 = 1000
m1, i1 = calculate_stats(principal, rate, p1)
p2 = 1500
m2, i2 = calculate_stats(principal, rate, p2)
p3 = 2000
m3, i3 = calculate_stats(principal, rate, p3)

print(f"Increasing from €1,000 to €1,500 saves {(m1-m2)/12:.1f} years and €{i1-i2:,.0f} interest.")
print(f"Increasing from €1,500 to €2,000 saves {(m2-m3)/12:.1f} years and €{i2-i3:,.0f} interest.")
