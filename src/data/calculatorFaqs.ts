export type FAQ = { question: string; answer: string };

export const calculatorFaqs: Record<string, FAQ[]> = {

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Mortgage & Real Estate
  // ══════════════════════════════════════════════════════════════

  'mortgage-calculator': [
    { question: 'How much house can I afford based on my salary?', answer: 'Most lenders use the 28/36 rule: your housing payment should not exceed 28% of gross monthly income, and total debt payments should not exceed 36%. For a $75,000 salary ($6,250/month), the maximum housing payment is about $1,750.' },
    { question: 'What is included in a monthly mortgage payment?', answer: 'A full mortgage payment (PITI) includes Principal, Interest, Property Taxes, and homeowners Insurance. If your down payment is less than 20%, Private Mortgage Insurance (PMI) is also included. HOA fees are separate.' },
    { question: 'Should I choose a 15-year or 30-year mortgage?', answer: 'A 30-year mortgage has lower monthly payments but higher total interest. A 15-year term saves tens of thousands in interest but requires higher payments. Use this calculator to compare both scenarios side by side.' },
    { question: 'How much can I save with extra mortgage payments?', answer: 'Adding even $100/month to a $250,000 mortgage at 6.5% can cut over 4 years off the loan and save more than $40,000 in interest. One extra payment per year can also shave years off your mortgage.' },
    { question: 'What credit score do I need for a mortgage?', answer: 'Conventional loans typically require 620+. FHA loans may accept 580 (or 500 with 10% down). VA loans have no government minimum but most lenders require 620+. Higher scores qualify for lower interest rates, saving you thousands.' },
  ],

  'amortization-calculator': [
    { question: 'What is an amortization schedule?', answer: 'An amortization schedule shows each monthly payment split between principal and interest over the life of the loan. Early payments are mostly interest; later payments are mostly principal. This calculator generates a full schedule for any loan.' },
    { question: 'How does amortization work?', answer: 'Each payment covers interest on the remaining balance first, then reduces principal. As principal decreases, less interest accrues each month, so more of your payment goes toward principal over time. This is why early payments feel like they make little progress.' },
    { question: 'What is the difference between amortization and depreciation?', answer: 'Amortization spreads loan payments over time. Depreciation allocates the cost of a physical asset over its useful life. Both involve spreading costs, but amortization is for loans/debts and depreciation is for assets.' },
    { question: 'How do extra payments affect my amortization?', answer: 'Extra payments go directly to principal, reducing the balance faster. This shortens the loan term and reduces total interest. The amortization schedule updates to show the new payoff date and interest savings.' },
  ],

  'mortgage-payoff-calculator': [
    { question: 'How do I calculate when my mortgage will be paid off?', answer: 'Enter your current balance, interest rate, remaining term, and any extra monthly payments. The calculator shows your exact payoff date and how much interest you will save by making additional payments.' },
    { question: 'How much interest do I save by paying off my mortgage early?', answer: 'Extra payments reduce principal immediately, which reduces all future interest charges. On a $300,000 mortgage at 6.5%, adding $200/month saves over $60,000 in interest and pays off the loan 7+ years early.' },
    { question: 'Is it better to pay off my mortgage or invest?', answer: 'Compare your mortgage interest rate to expected investment returns. If your mortgage is 6.5% and you expect 8% from investments, investing may be better. However, paying off your mortgage guarantees a risk-free return equal to your interest rate.' },
  ],

  'real-estate-calculator': [
    { question: 'What costs are involved in buying a home beyond the price?', answer: 'Closing costs (2-5% of price), property taxes, homeowners insurance, HOA fees, maintenance (1-2% of value annually), and potential PMI. This calculator helps you estimate total monthly housing costs including all these factors.' },
    { question: 'How much should I budget for closing costs?', answer: 'Closing costs typically range from 2-5% of the home price. For a $300,000 home, expect $6,000-$15,000 in closing costs. These include lender fees, title insurance, appraisal, and prepaid taxes and insurance.' },
  ],

  'refinance-calculator': [
    { question: 'When does refinancing my mortgage make sense?', answer: 'Refinancing is typically worth it when you can lower your interest rate by at least 0.75-1%. Calculate the break-even point: closing costs divided by monthly savings = months to recoup costs. If you plan to stay longer than the break-even period, refinancing saves money.' },
    { question: 'What are the costs of refinancing?', answer: 'Refinancing costs include origination fees, appraisal, title insurance, and closing costs (typically 2-5% of the loan amount). Some lenders offer no-closing-cost refinances but roll fees into the loan balance or charge a higher rate.' },
    { question: 'How do I know if refinancing will save me money?', answer: 'Compare your current monthly payment to the new payment. Subtract the new payment from the current payment to find monthly savings. Then divide closing costs by monthly savings to find the break-even point. If you will stay in the home past that point, refinancing saves money.' },
  ],

  'fha-loan-calculator': [
    { question: 'What is an FHA loan?', answer: 'An FHA loan is a mortgage insured by the Federal Housing Administration. It allows lower credit scores (580+ for 3.5% down, 500+ for 10% down) and smaller down payments than conventional loans. However, it requires mortgage insurance premiums (MIP) for the life of the loan.' },
    { question: 'How much is the FHA mortgage insurance premium?', answer: 'FHA loans require an upfront MIP of 1.75% of the loan amount, plus an annual MIP of 0.15-0.55% depending on loan term and amount. The annual MIP is paid monthly. Use this calculator to see the total monthly cost including MIP.' },
    { question: 'What is the minimum down payment for an FHA loan?', answer: 'The minimum down payment for an FHA loan is 3.5% with a credit score of 580 or higher. With a credit score of 500-579, the minimum down payment is 10%. This calculator helps you compare FHA payments to conventional options.' },
  ],

  'va-mortgage-calculator': [
    { question: 'What is a VA loan?', answer: 'A VA loan is a mortgage guaranteed by the U.S. Department of Veterans Affairs for eligible veterans, active-duty service members, and surviving spouses. It offers 0% down payment, no private mortgage insurance (PMI), and competitive interest rates.' },
    { question: 'Do VA loans have closing costs?', answer: 'While VA loans have no down payment and no PMI, they do have closing costs (2-3% of loan amount) and a VA funding fee (1.25-3.3% depending on down payment and first use). The funding fee can be financed into the loan.' },
    { question: 'Can I use a VA loan more than once?', answer: 'Yes. Your VA loan benefit is reusable. You can have more than one VA loan at a time if you have remaining entitlement. The funding fee may be higher for subsequent uses. Contact a VA-approved lender to check your entitlement.' },
  ],

  'home-equity-loan-calculator': [
    { question: 'What is a home equity loan?', answer: 'A home equity loan lets you borrow against the equity in your home (market value minus remaining mortgage). It provides a lump sum at a fixed interest rate, repaid over a set term. Your home serves as collateral.' },
    { question: 'How much equity do I need for a home equity loan?', answer: 'Most lenders require at least 15-20% equity in your home. On a $400,000 home with a $250,000 mortgage balance, you have $150,000 equity (37.5%), which qualifies. The calculator helps you determine available equity.' },
    { question: 'What is the difference between a home equity loan and HELOC?', answer: 'A home equity loan gives a fixed lump sum with fixed payments. A HELOC (Home Equity Line of Credit) is a revolving credit line you can draw from as needed, with variable rates. Choose a loan for one-time expenses; a HELOC for ongoing needs.' },
  ],

  'heloc-calculator': [
    { question: 'What is a HELOC?', answer: 'A Home Equity Line of Credit (HELOC) is a revolving credit line secured by your home equity. You can draw funds as needed during the draw period (typically 10 years), then repay during the repayment period (typically 20 years). Rates are usually variable.' },
    { question: 'How does a HELOC payment work?', answer: 'During the draw period, you typically pay interest-only on the amount drawn. During repayment, payments include principal and interest. This calculator shows estimated payments for both periods based on your balance and rate.' },
    { question: 'What is the difference between draw and repayment periods?', answer: 'The draw period (usually 10 years) lets you borrow funds and pay only interest. The repayment period (usually 20 years) requires principal and interest payments. Your payment increases significantly when the repayment period begins.' },
  ],

  'down-payment-calculator': [
    { question: 'How much should I save for a down payment?', answer: 'Down payments typically range from 3-20% of the home price. Conventional loans require 3-20%, FHA requires 3.5%, VA requires 0%. Putting down 20% avoids Private Mortgage Insurance (PMI), saving $100-300/month on a typical mortgage.' },
    { question: 'What happens if I put less than 20% down?', answer: 'With less than 20% down, you pay Private Mortgage Insurance (PMI) until you reach 20% equity. PMI adds $100-300/month to your payment on a typical mortgage. However, a smaller down payment lets you buy sooner and benefit from home appreciation.' },
    { question: 'Are there programs for first-time homebuyers with low down payments?', answer: 'Yes. FHA loans (3.5% down), VA loans (0% down for eligible buyers), USDA loans (0% down for rural areas), and many state/local programs offer low or no down payment options. Some provide down payment assistance grants.' },
  ],

  'house-affordability-calculator': [
    { question: 'How much house can I afford with a $100,000 salary?', answer: 'Using the 28/36 rule with a $100,000 salary ($8,333/month gross), your maximum housing payment is about $2,333. At current rates, this typically supports a home price of $300,000-$400,000 depending on your debts, down payment, and local taxes.' },
    { question: 'What is the 28/36 rule for home affordability?', answer: 'The 28/36 rule states your housing costs (mortgage, taxes, insurance) should not exceed 28% of gross monthly income, and total debt payments (housing + car loans, credit cards, student loans) should not exceed 36%. This is a guideline, not a guarantee of approval.' },
    { question: 'How do property taxes affect what I can afford?', answer: 'Property taxes vary widely by location (0.5-3% of home value annually). Higher taxes reduce how much home you can afford because they increase your monthly housing payment. A $400,000 home in Texas may cost $800+/month in taxes vs $200/month in Hawaii.' },
  ],

  'rent-calculator': [
    { question: 'How much should I spend on rent?', answer: 'A common guideline is spending no more than 30% of gross monthly income on rent. For a $60,000 salary ($5,000/month), rent should be $1,500 or less. Some experts recommend 25-30% of take-home pay for a more conservative approach.' },
    { question: 'What is the 30% rule for rent?', answer: 'The 30% rule suggests spending no more than 30% of gross monthly income on rent. This is a widely accepted guideline that leaves enough for savings, debt, and living expenses. In high-cost cities, 30-40% may be necessary but strains the budget.' },
  ],

  'debt-to-income-ratio-calculator': [
    { question: 'What is a good debt-to-income ratio?', answer: 'For mortgages, most lenders prefer a total DTI below 36%, with housing costs under 28%. FHA allows up to 43-50%. VA loans cap at 41%. Lower DTI ratios qualify for better rates and more loan options. Below 20% is excellent.' },
    { question: 'How do I calculate my DTI ratio?', answer: 'Add all monthly debt payments (rent/mortgage, car loans, student loans, credit card minimums, personal loans) and divide by gross monthly income. Multiply by 100 for a percentage. This calculator does this automatically.' },
    { question: 'How can I lower my DTI ratio?', answer: 'Pay down existing debts, avoid new debt, increase income, or consider a less expensive home. Even reducing DTI by 2-3% can improve mortgage approval chances and get you a better interest rate.' },
  ],

  'rent-vs-buy-calculator': [
    { question: 'Is it better to rent or buy a home?', answer: 'Buying builds equity and offers tax benefits but requires a large upfront investment and ongoing maintenance costs. Renting offers flexibility and lower upfront costs but builds no equity. This calculator compares total costs over your expected time in the home.' },
    { question: 'How long do I need to stay in a home for buying to be better?', answer: 'Generally, buying is better than renting if you plan to stay 5-7+ years. This allows time to recoup closing costs (2-5% of price) through equity building and appreciation. Shorter stays favor renting due to high transaction costs.' },
  ],

  'rental-property-calculator': [
    { question: 'How do I calculate rental property cash flow?', answer: 'Cash flow = monthly rent - (mortgage payment + property taxes + insurance + HOA + maintenance + vacancy allowance). Positive cash flow means the property pays for itself. This calculator shows projected cash flow based on your inputs.' },
    { question: 'What is a good cap rate for rental property?', answer: 'Cap rate = annual net operating income / property price. A 5-10% cap rate is generally considered good, depending on location and property type. Higher cap rates mean higher returns but may indicate higher risk or less desirable locations.' },
    { question: 'What expenses should I include for rental property?', answer: 'Include mortgage (P&I), property taxes, insurance, HOA fees, maintenance (1-8% of rent), vacancy (5-10%), property management (8-12% if applicable), and capital expenditures. This calculator includes the major categories.' },
  ],

  'apr-calculator': [
    { question: 'What is APR and how is it different from interest rate?', answer: 'APR (Annual Percentage Rate) includes the interest rate plus fees, points, and other loan costs expressed as a yearly rate. It gives a more complete picture of borrowing cost than the interest rate alone. Two loans with the same rate can have different APRs.' },
    { question: 'How do I compare loans using APR?', answer: 'APR standardizes the total cost of a loan including fees, making comparison easier. A loan with a lower rate but high fees may have a higher APR than a slightly higher rate with no fees. Always compare APR, not just interest rate.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Auto
  // ══════════════════════════════════════════════════════════════

  'auto-loan-calculator': [
    { question: 'How much car can I afford?', answer: 'A common rule is to keep your total car payment below 10-15% of take-home pay and total car costs (payment, insurance, gas, maintenance) below 20%. For a $4,000/month take-home, aim for a payment under $400-600.' },
    { question: 'Should I finance through the dealer or a bank?', answer: 'Compare offers from both. Dealers sometimes offer manufacturer incentives or promotional rates. Banks and credit unions may offer lower rates, especially if you are an existing customer. Get pre-approved before visiting the dealer to negotiate from strength.' },
    { question: 'How much should I put down on a car?', answer: 'Aim for at least 10-20% down to reduce monthly payments and avoid being upside-down (owing more than the car is worth). A larger down payment means lower interest charges over the loan term.' },
    { question: 'What is a good interest rate for a car loan?', answer: 'Good auto loan rates vary by credit score: 750+ (3-4%), 700-749 (4-5%), 650-699 (6-8%), 600-649 (9-12%). Check rates from multiple lenders before committing. Credit unions often offer the best rates.' },
  ],

  'cash-back-or-low-interest-calculator': [
    { question: 'Is a cash rebate or low interest rate better?', answer: 'It depends on the numbers. A $3,000 cash rebate may be better than 0% financing if the loan term is short. But 0% for 60 months saves more than a $2,000 rebate on a long loan. This calculator compares both scenarios.' },
    { question: 'How do I decide between cash back and 0% financing?', answer: 'Calculate the total cost of each option. With cash back, you pay interest but get money upfront. With 0% financing, you pay no interest but get no rebate. The better deal depends on the rebate amount, interest rate, loan term, and how long you keep the car.' },
  ],

  'auto-lease-calculator': [
    { question: 'What is the difference between leasing and buying a car?', answer: 'Leasing gives lower monthly payments but you do not own the car at the end. Buying costs more monthly but you build equity and own the vehicle. Leasing is ideal for those who want a new car every 2-3 years without long-term commitment.' },
    { question: 'What fees are included in a car lease?', answer: 'Common lease fees include acquisition fee ($300-900), disposition fee ($300-500), first month payment, security deposit, and taxes. This calculator estimates the base payment; confirm all fees with the dealer.' },
    { question: 'How do mileage limits affect my lease?', answer: 'Most leases include 10,000-15,000 miles/year. Exceeding the limit costs $0.15-0.30 per extra mile. If you drive more than 15,000 miles annually, buying may be more cost-effective than leasing.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Investment
  // ══════════════════════════════════════════════════════════════

  'interest-calculator': [
    { question: 'What is the difference between simple and compound interest?', answer: 'Simple interest is calculated only on the original principal. Compound interest is calculated on the principal plus previously earned interest, creating exponential growth over time. Compound interest is more powerful for long-term savings.' },
    { question: 'How do I calculate interest earned?', answer: 'For simple interest: I = P x r x t (principal x rate x time). For compound interest: A = P(1 + r/n)^(nt). This calculator handles both methods and shows the difference in growth over time.' },
  ],

  'investment-calculator': [
    { question: 'How much will my investment be worth in 10 years?', answer: 'Enter your starting amount, monthly contribution, expected annual return, and time horizon. The calculator projects future value using compound growth. For example, $10,000 + $250/month at 7% for 10 years grows to over $55,000.' },
    { question: 'What is a realistic return to assume?', answer: 'Historically, diversified U.S. stock portfolios returned 7-10% annually before inflation. For conservative planning, use 5-7%. For aggressive growth, 8-10%. Remember: past performance does not guarantee future results, and returns vary year to year.' },
    { question: 'How does compound growth work?', answer: 'Compound growth earns returns on both your original investment and on previously earned interest. Over time, this creates exponential growth. Starting early with small amounts can outperform larger contributions made later due to the longer compounding period.' },
  ],

  'finance-calculator': [
    { question: 'What does a finance calculator do?', answer: 'A finance calculator computes key financial metrics including present value, future value, interest rates, payment amounts, and number of periods. It uses time-value-of-money formulas to compare financial scenarios.' },
    { question: 'How do I use the TVM (time value of money) concept?', answer: 'Money today is worth more than the same amount in the future due to earning potential. This calculator uses TVM to compare present values, future values, and payment streams, helping you make informed financial decisions.' },
  ],

  'compound-interest-calculator': [
    { question: 'How does compound interest grow my money?', answer: 'Compound interest earns returns on both your principal and accumulated interest. At 7% annually, $10,000 doubles to $20,000 in about 10 years, $40,000 in 20 years, and $80,000 in 30 years. Starting early is the key to maximizing compound growth.' },
    { question: 'What is the Rule of 72?', answer: 'The Rule of 72 estimates how long it takes to double your money: divide 72 by the annual interest rate. At 7%, money doubles in about 10 years (72/7 = 10.3). At 4%, it takes 18 years. This quick mental math helps compare investment options.' },
    { question: 'How does compounding frequency affect my returns?', answer: 'More frequent compounding yields slightly higher returns. Daily compounding earns more than monthly, which earns more than annual. However, the difference is small at typical rates — time and contribution amount matter more than frequency.' },
    { question: 'How much do I need to invest to become a millionaire?', answer: 'Using the Rule of 72 at 7% return: investing $500/month from age 25 yields $1M+ by age 62. Starting at 35 requires $1,000/month. Starting at 45 requires $2,200/month. The earlier you start, the less you need to invest monthly.' },
  ],

  'interest-rate-calculator': [
    { question: 'How do I calculate the effective interest rate?', answer: 'The effective interest rate accounts for compounding frequency. A 6% rate compounded monthly has an effective rate of about 6.17%. This calculator converts nominal rates to effective rates so you can compare different compounding scenarios.' },
    { question: 'What is the difference between nominal and effective interest rate?', answer: 'The nominal rate is the stated rate before compounding. The effective rate includes the impact of compounding within the year. For example, 6% compounded monthly = 6.17% effective. Always compare effective rates when evaluating different financial products.' },
  ],

  'savings-calculator': [
    { question: 'How much should I save each month?', answer: 'Financial experts recommend saving 15-20% of gross income for retirement and emergencies. If you are behind, aim for 20-30%. This calculator shows how different monthly savings amounts grow over time with compound interest.' },
    { question: 'How long will it take to save $10,000?', answer: 'At $500/month, you will save $10,000 in about 20 months (without interest). With a high-yield savings account at 4-5% APY, it takes slightly less time. This calculator factors in interest to show your actual timeline.' },
    { question: 'What is a high-yield savings account?', answer: 'A high-yield savings account offers significantly higher interest rates than traditional savings accounts (4-5% vs 0.01-0.5%). They are FDIC-insured and ideal for emergency funds and short-term savings goals.' },
  ],

  'cd-calculator': [
    { question: 'What is a CD (certificate of deposit)?', answer: 'A CD is a savings product where you deposit money for a fixed term (3 months to 5+ years) in exchange for a guaranteed interest rate. Early withdrawal typically incurs a penalty. CDs offer higher rates than regular savings accounts.' },
    { question: 'How do CD rates compare to savings accounts?', answer: 'CDs typically offer 0.5-2% higher interest rates than savings accounts because you commit to leaving money in for a fixed term. The trade-off is less flexibility — you cannot access the money without penalty until the term ends.' },
    { question: 'What is a CD ladder strategy?', answer: 'A CD ladder spreads investments across CDs with staggered maturity dates (e.g., 1-year, 2-year, 3-year, 4-year). As each CD matures, you reinvest at the longest term. This provides regular access to funds while earning higher CD rates.' },
  ],

  'bond-calculator': [
    { question: 'What is a bond and how does it work?', answer: 'A bond is a loan you make to a government or corporation. You pay the face value and receive periodic interest payments (coupon) plus the face value back at maturity. Bond prices and interest rates move inversely.' },
    { question: 'How is bond yield calculated?', answer: 'Current yield = annual coupon payment / current bond price. Yield to maturity (YTM) accounts for all future coupon payments and the difference between current price and face value. This calculator computes both metrics.' },
  ],

  'mutual-fund-calculator': [
    { question: 'How do mutual fund returns work?', answer: 'Mutual fund returns come from dividends, interest, and capital gains. Returns are expressed as a percentage of the fund\'s net asset value (NAV). This calculator projects how your investment grows based on assumed annual returns.' },
    { question: 'What is a good return for a mutual fund?', answer: 'A good return depends on the fund type and market conditions. Stock funds historically average 7-10% annually. Bond funds average 3-5%. Balanced funds fall in between. Compare returns to the fund\'s benchmark index, not to other fund categories.' },
  ],

  'average-return-calculator': [
    { question: 'How do I calculate average investment return?', answer: 'Enter each year\'s return and the calculator computes your average (arithmetic mean) and geometric mean (compound annual growth rate). The geometric mean is more accurate for measuring investment performance over time.' },
    { question: 'What is the difference between arithmetic and geometric mean?', answer: 'Arithmetic mean adds all returns and divides by the number of years. Geometric mean accounts for compounding and is always lower or equal to the arithmetic mean. For investment performance, geometric mean (CAGR) is the more accurate measure.' },
  ],

  'irr-calculator': [
    { question: 'What is Internal Rate of Return (IRR)?', answer: 'IRR is the discount rate that makes the net present value (NPV) of all cash flows from an investment equal to zero. It represents the expected annualized compound return. Compare IRR to your required return — if IRR is higher, the investment may be worthwhile.' },
    { question: 'How do I interpret my IRR result?', answer: 'If IRR exceeds your required rate of return (hurdle rate), the investment may be acceptable. If IRR is below your required rate, the investment may not meet your return threshold. Higher IRR generally indicates a more attractive investment.' },
  ],

  'payback-period-calculator': [
    { question: 'What is the payback period?', answer: 'The payback period is the time it takes for an investment to generate enough cash flow to recover its initial cost. A shorter payback period means faster recovery of your investment. This calculator shows the exact number of years and months.' },
    { question: 'How do I use the payback period for investment decisions?', answer: 'Compare the payback period to your maximum acceptable recovery time. A shorter payback is generally better. However, payback period ignores the time value of money and cash flows after the payback point. Use it alongside IRR and NPV for better decisions.' },
  ],

  'present-value-calculator': [
    { question: 'What is present value?', answer: 'Present value (PV) is the current worth of a future sum of money, discounted at a given rate. $10,000 received in 5 years at 7% discount rate is worth about $7,130 today. PV helps compare money received at different times.' },
    { question: 'How do I calculate present value?', answer: 'PV = FV / (1 + r)^n, where FV is future value, r is the discount rate, and n is the number of periods. This calculator computes PV for single sums and annuities, helping you evaluate investments, loans, and financial decisions.' },
  ],

  'future-value-calculator': [
    { question: 'What is future value?', answer: 'Future value (FV) is what your current money will be worth at a future date, given a specified rate of return. $10,000 invested today at 7% for 10 years will be worth about $19,672. FV helps set savings goals and evaluate investments.' },
    { question: 'How does compound interest affect future value?', answer: 'Compound interest causes future value to grow exponentially. At 7%, your money doubles every 10 years. The longer the time horizon, the more dramatic the growth. This calculator shows year-by-year projections.' },
  ],

  'simple-interest-calculator': [
    { question: 'What is simple interest?', answer: 'Simple interest is calculated only on the original principal: I = P x r x t. Unlike compound interest, interest does not accumulate on previously earned interest. It is common for short-term loans and certain bonds.' },
    { question: 'When is simple interest used?', answer: 'Simple interest is used for short-term personal loans, auto loans, certain CDs, and bridge loans. It provides transparent, predictable calculations. This calculator shows the interest earned and total balance over any time period.' },
  ],

  'roi-calculator': [
    { question: 'How do I calculate return on investment (ROI)?', answer: 'ROI = (Gain from Investment - Cost of Investment) / Cost of Investment x 100. For example, investing $1,000 and selling for $1,200 = 20% ROI. This calculator computes ROI for any investment scenario.' },
    { question: 'What is a good ROI?', answer: 'A good ROI depends on the investment type and risk. Stock market average is 7-10% annually. Real estate rental yields 5-10%. High-risk ventures may target 20%+. Always compare ROI to the risk-free rate and alternative investments.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Retirement
  // ══════════════════════════════════════════════════════════════

  'retirement-calculator': [
    { question: 'How much do I need to retire?', answer: 'A common rule is the 4% rule: multiply your desired annual retirement spending by 25. If you need $60,000/year, you need $1.5 million. This calculator projects your savings growth and compares it to your retirement goal.' },
    { question: 'How much should I save for retirement each month?', answer: 'Financial experts recommend saving 15-20% of gross income. Starting at 25, this typically provides enough for retirement. Starting later requires higher percentages. This calculator shows how different monthly contributions grow over time.' },
    { question: 'What is the 4% rule for retirement withdrawals?', answer: 'The 4% rule suggests withdrawing 4% of your retirement portfolio in the first year, then adjusting for inflation annually. This historically allowed portfolios to last 30+ years. It is a guideline, not a guarantee — adjust based on market conditions and spending needs.' },
    { question: 'When should I start saving for retirement?', answer: 'Start as early as possible. Due to compound growth, starting at 25 with $300/month can outperform starting at 35 with $600/month. Every year you delay requires significantly more monthly contributions to reach the same goal.' },
  ],

  '401k-calculator': [
    { question: 'How much will my 401(k) be worth at retirement?', answer: 'Enter your current balance, monthly contribution, employer match, expected return, and years until retirement. The calculator projects your 401(k) growth including employer matching, which is essentially free money.' },
    { question: 'What is employer matching in a 401(k)?', answer: 'Employer matching is when your employer contributes additional money to your 401(k) based on your contributions. A common match is 50% of your contribution up to 6% of salary. Always contribute enough to get the full match — it is a guaranteed 50-100% return.' },
    { question: 'How much can I contribute to my 401(k) in 2026?', answer: 'The 2026 employee contribution limit is $23,500 ($31,000 if age 50+). Total contributions (employee + employer) cannot exceed $70,000. These limits are set by the IRS and change periodically.' },
  ],

  'pension-calculator': [
    { question: 'How is my pension benefit calculated?', answer: 'Most pensions use a formula: years of service x benefit multiplier x final average salary. For example, 25 years x 1.5% x $80,000 = $30,000/year. This calculator estimates your benefit based on your plan details.' },
    { question: 'What is a defined benefit vs defined contribution plan?', answer: 'Defined benefit (pension) guarantees a specific monthly benefit in retirement. Defined contribution (401k) depends on contributions and investment returns. Pensions are becoming less common; most employers now offer defined contribution plans.' },
  ],

  'social-security-calculator': [
    { question: 'How much will I get from Social Security?', answer: 'Your benefit depends on your 35 highest-earning years and when you claim. Full retirement age is 66-67 depending on birth year. Claiming early (62) reduces benefits by 25-30%. Delaying past full retirement age increases benefits by 8% per year until 70.' },
    { question: 'When should I start collecting Social Security?', answer: 'Delaying past full retirement age increases your monthly benefit by 8% per year until age 70. If you are healthy and have other income, delaying can be beneficial. If you need income or have health concerns, claiming earlier may be better.' },
    { question: 'Is Social Security taxable?', answer: 'Yes, up to 85% of Social Security benefits may be taxable depending on your combined income. If your combined income exceeds $25,000 (single) or $32,000 (married), you will owe federal taxes on a portion of your benefits.' },
  ],

  'annuity-calculator': [
    { question: 'What is an annuity?', answer: 'An annuity is a financial product that pays you a fixed income stream, usually for life, in exchange for a lump sum payment. It is commonly used for retirement income. Annuities can be immediate (payments start right away) or deferred (payments start later).' },
    { question: 'How much income will my annuity provide?', answer: 'This calculator estimates your annual or monthly income based on the lump sum invested, your age, and the annuity type. Rates vary by insurer, interest rates, and payout options (single life, joint life, period certain).' },
  ],

  'annuity-payout-calculator': [
    { question: 'How do I calculate annuity payouts?', answer: 'Enter your annuity balance, interest rate, payout period, and payment frequency. The calculator determines how much you can withdraw each period while maintaining the balance or depleting it over the specified timeframe.' },
    { question: 'What is the difference between annuitization and systematic withdrawal?', answer: 'Annuitization converts your balance into guaranteed lifetime income (you cannot change the amount). Systematic withdrawal lets you control how much and when you withdraw, but you risk running out of money if you live longer than expected.' },
  ],

  'roth-ira-calculator': [
    { question: 'What is a Roth IRA?', answer: 'A Roth IRA is a retirement account funded with after-tax dollars. Your investments grow tax-free, and qualified withdrawals in retirement are also tax-free. There are income limits for contributions ($161,000 single / $240,000 married in 2026).' },
    { question: 'Should I choose a Roth IRA or Traditional IRA?', answer: 'Choose Roth if you expect higher taxes in retirement (pay taxes now, withdraw tax-free). Choose Traditional if you expect lower taxes in retirement (tax deduction now, pay taxes on withdrawals). Many advisors recommend having both for tax diversification.' },
    { question: 'How much can I contribute to a Roth IRA?', answer: 'The 2026 contribution limit is $7,000 ($8,000 if age 50+). Contributions are limited by income: full contribution below $150,000 (single) or $236,000 (married), phasing out above those levels.' },
  ],

  'ira-calculator': [
    { question: 'What is the difference between a Traditional and Roth IRA?', answer: 'Traditional IRA: contributions may be tax-deductible, withdrawals are taxed in retirement. Roth IRA: contributions are after-tax, withdrawals are tax-free. Traditional IRAs have Required Minimum Distributions (RMDs) at age 73; Roth IRAs do not.' },
    { question: 'Can I have both a 401(k) and an IRA?', answer: 'Yes. You can contribute to both a 401(k) and an IRA in the same year. However, tax deductibility of Traditional IRA contributions may be limited if you are covered by a workplace plan and your income exceeds certain thresholds.' },
  ],

  'rmd-calculator': [
    { question: 'What is a Required Minimum Distribution (RMD)?', answer: 'An RMD is the minimum amount you must withdraw from tax-deferred retirement accounts (Traditional IRA, 401(k), etc.) each year starting at age 73. The IRS requires withdrawals because these accounts have not yet been taxed.' },
    { question: 'How is my RMD calculated?', answer: 'Your RMD is calculated by dividing your account balance (as of December 31 of the prior year) by the IRS life expectancy factor. This calculator uses the IRS Uniform Lifetime Table to compute your exact RMD for the year.' },
    { question: 'What happens if I do not take my RMD?', answer: 'Failing to take your RMD results in a 25% excise tax on the amount not withdrawn (reduced to 10% if corrected promptly). This is one of the stiffest IRS penalties. Always take your RMD by December 31 each year.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Tax & Salary
  // ══════════════════════════════════════════════════════════════

  'income-tax-calculator': [
    { question: 'How do I estimate my income tax?', answer: 'Enter your taxable income and the applicable tax rate. This calculator applies a flat rate for estimation. For actual filing, use progressive tax brackets, deductions, and credits. This tool is for planning purposes only.' },
    { question: 'What is the difference between marginal and effective tax rate?', answer: 'Marginal rate is the tax on your next dollar earned. Effective rate is total tax divided by total income. Your effective rate is always lower than your marginal rate because lower brackets are taxed at lower rates.' },
  ],

  'marriage-tax-calculator': [
    { question: 'How does marriage affect my taxes?', answer: 'Marriage can result in a tax bonus (two moderate incomes benefit from combined brackets) or a marriage penalty (two high incomes may face higher combined rates). This calculator compares your tax liability as single vs married.' },
    { question: 'Should we file jointly or separately?', answer: 'Married filing jointly usually offers lower rates and more deductions. Married filing separately may benefit if one spouse has significant deductions or income-based repayment on student loans. Run both scenarios to compare.' },
  ],

  'estate-tax-calculator': [
    { question: 'What is estate tax?', answer: 'Estate tax is a federal tax on the transfer of a deceased person\'s estate. The 2026 exemption is approximately $7 million per individual ($14 million for married couples). Estates above this threshold are taxed at 18-40%.' },
    { question: 'How do I estimate estate tax liability?', answer: 'Enter the total estate value and applicable exemption. The calculator computes the taxable estate and applies the marginal tax rates. Estate planning strategies like trusts, gifting, and charitable giving can reduce estate tax.' },
  ],

  'take-home-paycheck-calculator': [
    { question: 'How do I calculate my take-home pay?', answer: 'Start with gross pay, then subtract federal income tax, state income tax, Social Security (6.2%), Medicare (1.45%), health insurance, retirement contributions, and other deductions. This calculator estimates your net pay based on these deductions.' },
    { question: 'Why is my take-home pay less than my salary?', answer: 'Your salary is gross pay before deductions. Federal and state taxes, Social Security, Medicare, health insurance premiums, retirement contributions, and other benefits are deducted. These deductions reduce your net (take-home) pay.' },
  ],

  'sales-tax-calculator': [
    { question: 'How do I calculate sales tax?', answer: 'Multiply the purchase price by the sales tax rate. For example, a $100 item at 8.5% sales tax = $108.50. This calculator computes sales tax for any amount and rate. Enter the price and tax rate to get the total instantly.' },
    { question: 'What states have no sales tax?', answer: 'Five U.S. states have no statewide sales tax: Oregon, Montana, New Hampshire, Delaware, and Alaska. However, some Alaska localities charge local sales tax. This calculator works for any state or local rate.' },
  ],

  'vat-calculator': [
    { question: 'What is VAT?', answer: 'VAT (Value Added Tax) is a consumption tax charged at each stage of production and distribution. Unlike sales tax (charged once at final sale), VAT is collected by businesses at each step. The end consumer bears the total cost. VAT rates vary by country (5-25%).' },
    { question: 'How do I calculate VAT?', answer: 'To add VAT: multiply the base price by (1 + VAT rate). To extract VAT from a VAT-inclusive price: divide by (1 + VAT rate). This calculator handles both scenarios for any VAT rate.' },
  ],

  'salary-calculator': [
    { question: 'How do I convert hourly pay to salary?', answer: 'Multiply hourly rate by hours worked per week, then by 52 weeks. For example: $25/hour x 40 hours x 52 = $52,000 annual salary. This calculator handles conversions between hourly, daily, weekly, biweekly, monthly, and annual pay.' },
    { question: 'How do I calculate my hourly rate from a salary?', answer: 'Divide annual salary by total hours per year (typically 2,080 for full-time). For $50,000: $50,000 / 2,080 = $24.04/hour. This calculator does this conversion instantly.' },
  ],

  'commission-calculator': [
    { question: 'How do I calculate my commission?', answer: 'Commission = sales amount x commission rate. For example, $100,000 in sales at 5% commission = $5,000. Some plans use tiered rates (higher rates for higher sales volumes). This calculator handles flat and tiered commission structures.' },
    { question: 'What is a typical commission rate?', answer: 'Commission rates vary by industry: real estate (2-3%), car sales (2-5%), insurance (10-20%), SaaS sales (10-20%), retail (1-5%). Base salary plus commission is common in many sales roles.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Loans & Debt
  // ══════════════════════════════════════════════════════════════

  'loan-calculator': [
    { question: 'How do I calculate my loan payment?', answer: 'Enter the loan amount, interest rate, and term. The calculator uses the standard amortization formula to compute your fixed monthly payment. It also shows total interest paid over the life of the loan.' },
    { question: 'How much interest will I pay on my loan?', answer: 'Total interest depends on the amount, rate, and term. A $20,000 loan at 6% for 5 years costs about $3,200 in interest. The same loan at 10% costs about $5,500. This calculator shows total interest for any scenario.' },
    { question: 'What is the difference between APR and interest rate?', answer: 'The interest rate is the cost of borrowing the principal. APR includes the interest rate plus fees, points, and other charges, giving a more complete picture of the total borrowing cost.' },
  ],

  'payment-calculator': [
    { question: 'How do I calculate monthly loan payments?', answer: 'This calculator computes fixed monthly payments using the standard amortization formula: Payment = P x r(1+r)^n / ((1+r)^n - 1), where P is principal, r is monthly rate, and n is number of months.' },
    { question: 'How do extra payments affect my loan?', answer: 'Extra payments go directly to principal, reducing the balance faster. This shortens the loan term and significantly reduces total interest. On a $20,000 loan, adding $50/month can save hundreds in interest.' },
  ],

  'credit-card-calculator': [
    { question: 'How long will it take to pay off my credit card?', answer: 'Enter your balance, interest rate, and monthly payment. The calculator shows how many months it takes to pay off the balance and total interest paid. Minimum payments can take decades to pay off even small balances.' },
    { question: 'How much should I pay each month on my credit card?', answer: 'Pay more than the minimum. Minimum payments (typically 1-3% of balance) result in years of interest charges. Paying $200/month on a $5,000 balance at 20% APR pays it off in about 30 months vs 20+ years with minimums.' },
    { question: 'What is the fastest way to pay off credit card debt?', answer: 'Use the avalanche method (pay highest interest rate first) or snowball method (pay smallest balance first). Both work. The avalanche saves more in interest; the snowball provides psychological wins. This calculator shows your payoff timeline.' },
  ],

  'credit-cards-payoff-calculator': [
    { question: 'How do I pay off multiple credit cards?', answer: 'Enter each card\'s balance, interest rate, and minimum payment. The calculator shows the total time and interest to pay off all cards. You can compare payoff strategies: avalanche (highest rate first) vs snowball (smallest balance first).' },
    { question: 'Should I use the avalanche or snowball method?', answer: 'Avalanche (highest interest rate first) saves the most money. Snowball (smallest balance first) gives quick wins for motivation. Both are effective. Choose the one you will stick with consistently.' },
    { question: 'Is debt consolidation a good idea?', answer: 'Consolidation can simplify payments and lower your interest rate if you qualify for a good rate. Use this calculator to compare your current total payments to a single consolidated loan payment. Watch for fees and ensure the new rate is actually lower.' },
  ],

  'debt-payoff-calculator': [
    { question: 'How fast can I pay off my debt?', answer: 'Enter all your debts with balances, interest rates, and minimum payments. The calculator shows payoff timelines for both minimum payments and accelerated strategies. Adding even $50-100 extra per month dramatically reduces payoff time.' },
    { question: 'What is the debt snowball method?', answer: 'The debt snowball method pays off the smallest balance first while making minimums on others. Once the smallest is paid off, redirect that payment to the next smallest. This creates momentum through quick wins.' },
    { question: 'What is the debt avalanche method?', answer: 'The debt avalanche method pays off the highest interest rate debt first while making minimums on others. This saves the most money in interest but requires discipline since larger balances take longer to eliminate.' },
  ],

  'debt-consolidation-calculator': [
    { question: 'Should I consolidate my debts?', answer: 'Compare your current total monthly payments and interest to a single consolidation loan. If the consolidation loan has a lower rate and total cost, it may be beneficial. Watch for origination fees and ensure the new loan term is reasonable.' },
    { question: 'What are the pros and cons of debt consolidation?', answer: 'Pros: lower interest rate, single payment, faster payoff. Cons: fees, temptation to accumulate more debt, potentially longer term. Consolidation works best when combined with a budget and no new debt accumulation.' },
  ],

  'repayment-calculator': [
    { question: 'How do I calculate my loan repayment schedule?', answer: 'Enter the loan amount, interest rate, and term. The calculator generates a complete repayment schedule showing principal and interest for each payment, remaining balance, and total cost over the loan life.' },
    { question: 'How do extra payments change my repayment?', answer: 'Extra payments reduce principal immediately, lowering all future interest charges. This calculator shows how adding even small extra amounts shortens your loan term and reduces total interest paid.' },
  ],

  'student-loan-calculator': [
    { question: 'How much will my student loan payment be?', answer: 'Enter your loan balance, interest rate, and repayment term. The calculator shows your monthly payment under standard 10-year repayment. You can also compare income-driven repayment (IDR) plans and see the total cost of each option.' },
    { question: 'What is income-driven repayment (IDR)?', answer: 'IDR plans cap monthly payments at a percentage of discretionary income (10-20%) and extend the term to 20-25 years. Remaining balances may be forgiven. IDR is helpful for high-balance borrowers but results in more total interest paid.' },
    { question: 'How do I pay off student loans faster?', answer: 'Make biweekly payments (equivalent to one extra payment per year), pay more than the minimum, apply windfalls (tax refunds, bonuses) to principal, and consider refinancing to a lower rate if you have good credit and stable income.' },
  ],

  'college-cost-calculator': [
    { question: 'How much will college cost in the future?', answer: 'College costs increase 3-6% annually. If current tuition is $25,000/year and your child is 5 years old, costs could be $35,000-45,000/year by the time they enroll. This calculator projects future costs based on assumed inflation rates.' },
    { question: 'How much should I save for college?', answer: 'Start saving early and consistently. A 529 college savings plan offers tax advantages. Even $200/month from birth can accumulate to $80,000+ by age 18 at 7% returns. This calculator shows how different savings amounts grow over time.' },
  ],

  'business-loan-calculator': [
    { question: 'How much can my business afford to borrow?', answer: 'Lenders typically look at debt service coverage ratio (DSCR) — your net operating income divided by total debt service. A DSCR above 1.25 means you generate 25% more income than needed to cover payments. This calculator helps estimate affordable loan amounts.' },
    { question: 'What factors affect my business loan rate?', answer: 'Credit score, time in business, annual revenue, industry, loan amount, and collateral all affect your rate. Established businesses with strong revenue and good credit qualify for the best rates (5-8%). Startups may pay 10-30%.' },
  ],

  'personal-loan-calculator': [
    { question: 'How much will a personal loan cost me?', answer: 'Enter the loan amount, interest rate, and term. The calculator shows your monthly payment, total interest, and total cost. Personal loan rates range from 6-36% depending on credit score and lender.' },
    { question: 'What credit score do I need for a personal loan?', answer: 'Most lenders require 580+ for a personal loan. Scores of 670+ qualify for the best rates. Below 580, options are limited and rates are high. Some lenders specialize in fair or poor credit loans.' },
    { question: 'Should I use a personal loan for debt consolidation?', answer: 'If the personal loan rate is lower than your current credit card rates, consolidation can save money. For example, moving $10,000 from a 20% credit card to a 10% personal loan saves about $1,000/year in interest.' },
  ],

  'boat-loan-calculator': [
    { question: 'How much does it cost to finance a boat?', answer: 'Enter the boat price, down payment, interest rate, and loan term. Boat loans typically have higher rates than auto loans (5-10%) and shorter terms (10-20 years). Use this calculator to estimate monthly payments and total cost.' },
    { question: 'What should I consider before financing a boat?', answer: 'Beyond the loan payment, budget for insurance ($500-2,000/year), storage ($2,000-10,000/year), maintenance (10% of boat value annually), fuel, and registration. Total annual costs can be 10-20% of the boat\'s value.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // FINANCIAL — Other
  // ══════════════════════════════════════════════════════════════

  'currency-calculator': [
    { question: 'How do I convert currency?', answer: 'Enter the amount, source currency, target currency, and exchange rate. The calculator multiplies the amount by the rate. Use current rates from Google, XE.com, or your bank for accurate conversions.' },
    { question: 'Where do I find current exchange rates?', answer: 'Check Google Finance, XE.com, or your bank for live rates. Central banks publish official rates. For large transactions, use the mid-market rate as a reference but expect your bank to add a spread of 1-3%.' },
  ],

  'inflation-calculator': [
    { question: 'How does inflation affect my money over time?', answer: 'Inflation reduces purchasing power. At 3% annual inflation, $100 today buys about $86 worth of goods in 5 years, $74 in 10 years, and $55 in 20 years. This calculator projects future costs and the real value of savings.' },
    { question: 'What is the average inflation rate?', answer: 'The U.S. average inflation rate has been about 3-4% historically. The Federal Reserve targets 2%. In recent years, inflation has ranged from 1.5% to 8%+. Use a realistic rate for long-term planning (3-4% is common).' },
  ],

  'depreciation-calculator': [
    { question: 'How do I calculate depreciation?', answer: 'This calculator uses straight-line depreciation: annual depreciation = (cost - salvage value) / useful life. Enter the asset cost, salvage value, useful life, and years elapsed to see annual depreciation and current book value.' },
    { question: 'What is the difference between depreciation and book value?', answer: 'Depreciation is the annual expense allocated. Book value is the remaining value on the balance sheet (cost minus accumulated depreciation). Book value decreases each year until it reaches salvage value.' },
  ],

  'margin-calculator': [
    { question: 'What is the difference between margin and markup?', answer: 'Margin is profit as a percentage of selling price. Markup is profit as a percentage of cost. A $100 item selling for $150 has 33.3% margin and 50% markup. They are different metrics and should not be used interchangeably.' },
    { question: 'How do I calculate gross margin?', answer: 'Gross margin = (revenue - cost of goods sold) / revenue x 100. For example, $50,000 revenue with $30,000 COGS = 40% gross margin. This calculator computes margin and markup from any cost and selling price.' },
  ],

  'discount-calculator': [
    { question: 'How do I calculate a discount percentage?', answer: 'Discount % = (original price - sale price) / original price x 100. For example, a $200 item on sale for $150 = 25% discount. This calculator computes discounts for any price and percentage.' },
    { question: 'How much will I save with a discount?', answer: 'Enter the original price and discount percentage. The calculator shows the savings amount and final price. For a $500 item at 30% off, you save $150 and pay $350.' },
  ],

  'lease-calculator': [
    { question: 'How do I calculate lease payments?', answer: 'Enter the asset value, residual value, interest rate, and lease term. The calculator computes monthly payments based on depreciation and finance charges. This works for equipment, vehicles, and other leased assets.' },
    { question: 'What is the difference between leasing and buying?', answer: 'Leasing gives lower monthly payments but no ownership. Buying costs more per month but builds equity. Leasing is better for assets that depreciate quickly or that you only need temporarily.' },
  ],

  'budget-calculator': [
    { question: 'How do I create a monthly budget?', answer: 'Enter your monthly income and allocate amounts to housing, other needs, wants, and savings. The calculator shows how much is left unallocated. Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings.' },
    { question: 'What is a good savings rate?', answer: 'Financial experts recommend saving 15-20% of gross income. If you are behind on retirement savings, aim for 20-30%. Even saving 10% is better than nothing. The key is consistency and starting early.' },
    { question: 'How much should I spend on housing?', answer: 'Aim for 25-30% of take-home pay on housing (rent/mortgage + utilities). In high-cost areas, 30-40% may be necessary. Spending more than 40% on housing strains the rest of your budget and limits savings.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // HEALTH — Fitness
  // ══════════════════════════════════════════════════════════════

  'bmi-calculator': [
    { question: 'What is a healthy BMI range?', answer: 'According to the WHO and CDC, a healthy BMI for adults is 18.5 to 24.9. Below 18.5 is underweight, 25-29.9 is overweight, and 30+ is obese. BMI is a screening tool, not a diagnostic measure of health.' },
    { question: 'Is BMI accurate for athletes?', answer: 'BMI can overestimate body fat in muscular individuals because muscle is denser than fat. An athlete with significant muscle mass may have a BMI in the overweight range despite having low body fat. Use BMI alongside waist circumference and body fat percentage.' },
    { question: 'How do I calculate BMI manually?', answer: 'BMI = weight (kg) / height (m) squared. For example, 70 kg / (1.75 x 1.75) = 22.9. For imperial: (weight in lbs x 703) / (height in inches squared). This calculator does both conversions automatically.' },
  ],

  'healthy-weight-calculator': [
    { question: 'What is a healthy weight for my height?', answer: 'This calculator shows the weight range corresponding to a BMI of 18.5-24.9 for your height. For example, a 5\'10" person has a healthy range of about 129-174 lbs. This is a reference range, not a mandatory target.' },
    { question: 'How do I find my ideal body weight?', answer: 'Healthy weight depends on height, sex, age, and body composition. This calculator uses BMI-based ranges. Your doctor can help determine a target weight that accounts for your individual health profile and goals.' },
  ],

  'calorie-calculator': [
    { question: 'How many calories should I eat per day?', answer: 'This depends on your age, sex, weight, height, and activity level. This calculator uses the Mifflin-St Jeor equation to estimate your TDEE (Total Daily Energy Expenditure). For weight loss, eat 250-500 calories below TDEE.' },
    { question: 'What is the difference between BMR and TDEE?', answer: 'BMR (Basal Metabolic Rate) is calories burned at complete rest. TDEE is BMR multiplied by an activity factor, representing total daily calorie burn including all movement. TDEE is what you eat to maintain current weight.' },
    { question: 'How accurate are calorie calculators?', answer: 'Online calculators are estimates within 10-15% of actual needs. Individual variation exists due to genetics, muscle mass, and metabolism. Use the estimate as a starting point and adjust based on real-world results over 2-4 weeks.' },
  ],

  'bmr-calculator': [
    { question: 'What is BMR?', answer: 'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic functions like breathing, circulation, and cell production. It represents 60-70% of your total daily calorie burn.' },
    { question: 'How do I calculate my BMR?', answer: 'This calculator uses the Mifflin-St Jeor equation, widely considered the most accurate for healthy adults. Men: BMR = 10W + 6.25H - 5A + 5. Women: BMR = 10W + 6.25H - 5A - 161. W=weight(kg), H=height(cm), A=age.' },
  ],

  'tdee-calculator': [
    { question: 'What is TDEE?', answer: 'TDEE (Total Daily Energy Expenditure) is the total calories your body burns in a day, including BMR, physical activity, and the thermic effect of food. Eating at your TDEE maintains your current weight.' },
    { question: 'How do I use TDEE for weight loss?', answer: 'Subtract 250-500 calories from your TDEE for gradual weight loss (0.5-1 lb/week). Never go below 1,200 calories/day (women) or 1,500/day (men) without medical supervision. This calculator provides your TDEE and suggested calorie targets.' },
    { question: 'How do I choose my activity level?', answer: 'Be honest about your weekly activity. Sedentary = desk job, no exercise. Lightly active = light exercise 1-3 days/week. Moderately active = moderate exercise 3-5 days/week. Very active = hard exercise 6-7 days/week. Most people overestimate their activity level.' },
  ],

  'body-fat-calculator': [
    { question: 'What is a healthy body fat percentage?', answer: 'For men: athletes 6-13%, fitness 14-17%, average 18-24%. For women: athletes 14-20%, fitness 21-24%, average 25-31%. Essential fat (minimum for health) is 2-5% for men and 10-13% for women.' },
    { question: 'How do I measure body fat accurately?', answer: 'This calculator uses the Navy circumference method (measurements at specific body sites). For best accuracy, measure at the same time of day, keep the tape level, and avoid pulling too tight. DEXA scans and hydrostatic weighing are more accurate but expensive.' },
  ],

  'army-body-fat-calculator': [
    { question: 'What are the Army body fat standards?', answer: 'The U.S. Army uses maximum body fat percentages: men aged 17-20: 20%, 21-27: 22%, 28-39: 24%, 40+: 26%. Women aged 17-20: 30%, 21-27: 32%, 28-39: 34%, 40+: 36%. This calculator estimates body fat using the Army method.' },
  ],

  'ideal-weight-calculator': [
    { question: 'What is my ideal body weight?', answer: 'This calculator uses the Devine formula (developed for medication dosing) and BMI-based ranges to estimate your ideal weight. The result is a broad reference, not a mandatory target. Your doctor can help set a healthy weight goal.' },
    { question: 'Is the Devine formula accurate?', answer: 'The Devine formula provides reasonable estimates but does not account for muscle mass, bone density, age, or individual health. Two people of the same height may have very different healthy weights. Use the result as a starting point.' },
  ],

  'lean-body-mass-calculator': [
    { question: 'What is lean body mass?', answer: 'Lean body mass includes everything that is not fat: muscle, organs, bones, connective tissue, and water. It is estimated using the Boer equation based on weight, height, and sex. Higher lean mass percentage indicates better body composition.' },
    { question: 'How do I increase my lean body mass?', answer: 'Combine progressive resistance training (weightlifting) with adequate protein intake (1.6-2.2 g/kg body weight). Eat at a slight caloric surplus or maintenance to support muscle growth. Consistency over months produces results.' },
  ],

  'calories-burned-calculator': [
    { question: 'How many calories do I burn during exercise?', answer: 'Calories burned depend on the activity type (MET value), duration, and body weight. This calculator uses the MET formula: Calories = minutes x MET x 3.5 x weight(kg) / 200. Higher-intensity activities burn more calories per minute.' },
    { question: 'Which exercises burn the most calories?', answer: 'Running (8-12 METs), swimming (7-10 METs), cycling (7-12 METs), and rowing (7-8 METs) are among the highest calorie-burning exercises. Duration matters as much as intensity — a 60-minute walk can burn more than a 20-minute run.' },
  ],

  'one-rep-max-calculator': [
    { question: 'What is a one-rep max (1RM)?', answer: 'A one-rep max is the maximum weight you can lift for a single repetition with good form. It is the standard measure of muscular strength and is used to set training intensities for different workout goals.' },
    { question: 'How accurate is a 1RM calculator?', answer: 'The Epley and Brzycki formulas are most accurate for 1-10 rep ranges. Beyond 10 reps, accuracy decreases. The calculator provides a safe estimate so you do not have to attempt a dangerous maximal lift.' },
    { question: 'How do I use my 1RM for training?', answer: 'Use percentages: 85-100% for strength (1-5 reps), 70-85% for hypertrophy (6-12 reps), 50-70% for endurance (12+ reps). This calculator shows your estimated 1RM and suggested training percentages for each goal.' },
  ],

  'target-heart-rate-calculator': [
    { question: 'What is my target heart rate for exercise?', answer: 'This calculator uses the Karvonen method (heart rate reserve) for accuracy. Enter your age and resting heart rate. Training zones: 50-60% for warm-up, 60-70% for fat burning, 70-80% for aerobic, 80-90% for anaerobic.' },
    { question: 'How do I measure my resting heart rate?', answer: 'Measure first thing in the morning before getting out of bed. Place fingers on your wrist (radial artery) or neck (carotid artery). Count beats for 60 seconds, or 30 seconds and multiply by 2. Measure for several days and average the results.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // HEALTH — Pregnancy
  // ══════════════════════════════════════════════════════════════

  'pregnancy-calculator': [
    { question: 'How do I calculate my due date?', answer: 'Enter the first day of your last menstrual period (LMP) and average cycle length. The calculator adds 280 days (40 weeks), adjusted for cycle length. Only about 5% of babies arrive on their exact due date.' },
    { question: 'How accurate is a due date estimate?', answer: 'Due dates based on LMP are accurate to within 1-2 weeks for regular cycles. Ultrasound dating in the first trimester is more precise. Most babies are born within 1-2 weeks before or after the estimated due date.' },
  ],

  'pregnancy-conception-calculator': [
    { question: 'When did I likely conceive?', answer: 'Enter the first day of your last menstrual period and cycle length. The calculator estimates conception occurred about 14 days before your next expected period. Conception typically happens within 24-48 hours of ovulation.' },
    { question: 'How does the conception calculator work?', answer: 'The calculator estimates ovulation date based on your cycle length (typically 14 days before the next period), then estimates conception within 24-48 hours of ovulation. This is an estimate — exact timing is difficult to determine.' },
  ],

  'due-date-calculator': [
    { question: 'What is my estimated due date?', answer: 'Enter your last menstrual period date and cycle length. The calculator adds 280 days (standard pregnancy length) adjusted for your cycle. Due dates are estimates — only about 5% of babies arrive on the exact date.' },
    { question: 'How many weeks pregnant am I?', answer: 'Pregnancy is counted from the first day of your last menstrual period (LMP), not from conception. If your LMP was January 1 and today is March 15, you are about 10 weeks pregnant. This calculator shows your current week.' },
  ],

  'pregnancy-weight-gain-calculator': [
    { question: 'How much weight should I gain during pregnancy?', answer: 'Recommended weight gain depends on pre-pregnancy BMI: underweight (28-40 lbs), normal (25-35 lbs), overweight (15-25 lbs), obese (11-20 lbs). This calculator shows your specific range based on your BMI and pregnancy week.' },
    { question: 'Is it normal to gain weight differently than recommended?', answer: 'Yes. Weight gain varies by individual. Some women gain more early; others gain more later. Discuss any significant deviations with your healthcare provider. Never diet during pregnancy — focus on nutritious foods.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // HEALTH — Cycle
  // ══════════════════════════════════════════════════════════════

  'ovulation-calculator': [
    { question: 'When am I most likely to ovulate?', answer: 'Ovulation typically occurs about 14 days before your next period. For a 28-day cycle, this is around day 14. The fertile window spans about 5 days before ovulation through 1 day after. This calculator estimates these dates.' },
    { question: 'How accurate is the calendar method for ovulation?', answer: 'The calendar method works best for very regular cycles. Even with regular cycles, ovulation can vary by 1-3 days. For family planning, use additional methods (OPK tests, basal body temperature) for more accurate timing.' },
  ],

  'conception-calculator': [
    { question: 'When is the best time to conceive?', answer: 'The best time to conceive is during the fertile window, which spans 5 days before ovulation through 1 day after. Sperm can survive up to 5 days, but the egg survives only 12-24 hours. This calculator estimates your fertile window.' },
    { question: 'How does the conception calculator work?', answer: 'Enter your last menstrual period and cycle length. The calculator estimates ovulation (14 days before next period) and your fertile window (5 days before through 1 day after ovulation). These are estimates based on calendar calculations.' },
  ],

  'period-calculator': [
    { question: 'When will my next period start?', answer: 'Enter the first day of your most recent period and your average cycle length. The calculator adds your cycle length to estimate the next period. For a 28-day cycle starting January 1, the next period is estimated around January 29.' },
    { question: 'What is a normal cycle length?', answer: 'A normal menstrual cycle is 21-35 days, with 28 days being the average. Cycles can vary month to month, especially in younger women and those approaching menopause. Irregular cycles do not necessarily indicate a health problem.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // HEALTH — Nutrition
  // ══════════════════════════════════════════════════════════════

  'macro-calculator': [
    { question: 'What are macros and how do I track them?', answer: 'Macros (macronutrients) are protein, carbohydrates, and fat. Each provides calories and serves different functions. This calculator estimates your daily macro targets based on your calorie needs, activity level, and goals.' },
    { question: 'What is a good macro split for weight loss?', answer: 'A common split is 30% protein, 40% carbs, 30% fat. Higher protein (1.6-2.2 g/kg) preserves muscle during a deficit. The key is total calorie deficit, not the exact macro ratio. Choose a split you can sustain.' },
    { question: 'How many grams of protein do I need?', answer: 'Sedentary: 0.8 g/kg. Active: 1.2-2.0 g/kg. Strength athletes: 1.6-2.2 g/kg. For a 70 kg person, this is 56-154 grams per day depending on activity. This calculator provides personalized targets.' },
  ],

  'carbohydrate-calculator': [
    { question: 'How many carbohydrates do I need per day?', answer: 'Carbohydrate needs depend on activity level: sedentary (45-55% of calories), moderately active (45-55%), very active (55-65%). For a 2,000 calorie diet at 50%, that is 250g of carbs. This calculator provides personalized targets.' },
    { question: 'What are complex vs simple carbohydrates?', answer: 'Complex carbs (whole grains, vegetables, legumes) digest slowly, providing sustained energy. Simple carbs (sugar, white bread, candy) spike blood sugar quickly. Focus on complex carbs for better energy and health outcomes.' },
  ],

  'fat-intake-calculator': [
    { question: 'How much fat should I eat per day?', answer: 'The Acceptable Macronutrient Distribution Range (AMDR) is 20-35% of calories from fat. For a 2,000 calorie diet, that is 44-78g of fat per day. Focus on unsaturated fats (olive oil, nuts, avocado) and limit saturated fat.' },
    { question: 'What is the difference between saturated and unsaturated fat?', answer: 'Unsaturated fats (olive oil, nuts, fish) are heart-healthy and can improve cholesterol. Saturated fats (butter, red meat, cheese) should be limited to <10% of calories. Trans fats (partially hydrogenated oils) should be avoided entirely.' },
  ],

  'protein-calculator': [
    { question: 'How much protein do I need per day?', answer: 'General: 0.8 g/kg for sedentary adults. Active: 1.2-2.0 g/kg. Strength athletes: 1.6-2.2 g/kg. For a 70 kg person, this ranges from 56-154 grams daily. This calculator provides personalized targets based on your activity level.' },
    { question: 'When should I eat protein for muscle growth?', answer: 'Total daily protein matters more than timing. However, spreading protein across 3-5 meals (20-40g each) optimizes muscle protein synthesis. Post-workout protein (within 2 hours) supports recovery.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // HEALTH — Other
  // ══════════════════════════════════════════════════════════════

  'gfr-calculator': [
    { question: 'What does my GFR number mean?', answer: 'GFR (Glomerular Filtration Rate) measures kidney function. Above 90: normal. 60-89: mildly decreased. 45-59: moderately decreased. 30-44: severely decreased. Below 15: kidney failure. A single low result does not confirm disease.' },
    { question: 'What factors affect my GFR?', answer: 'GFR is influenced by age, sex, muscle mass, diet (protein and creatine supplements), hydration, and medications. A single result should be interpreted with other kidney markers and clinical history.' },
  ],

  'body-type-calculator': [
    { question: 'What are the different body types?', answer: 'Common shapes: hourglass (balanced bust/hips with narrow waist), rectangle (similar measurements), triangle/pear (wider hips), inverted triangle (wider bust). These are descriptive categories for clothing guidance, not medical diagnoses.' },
    { question: 'How do I measure my body type?', answer: 'Measure bust (fullest point), waist (narrowest point), and hips (widest point). This calculator compares these measurements to estimate your shape. Measure over fitted clothing for accuracy.' },
  ],

  'body-surface-area-calculator': [
    { question: 'What is body surface area (BSA)?', answer: 'BSA is the total surface area of the body in square meters. Average adult BSA is about 1.7-1.9 m². It is used in some clinical contexts for medication dosing and physiological assessments.' },
    { question: 'How is BSA calculated?', answer: 'This calculator uses two methods: Mosteller (square root of height x weight / 3600) and Du Bois. Both provide similar results. BSA is used clinically but must not be used independently to dose medications.' },
  ],

  'bac-calculator': [
    { question: 'How is blood alcohol content estimated?', answer: 'This calculator uses a simplified Widmark model accounting for sex, weight, number of drinks, and time elapsed. It provides a rough estimate only — it cannot account for food, medication, health, or individual metabolism differences.' },
    { question: 'How long does it take to sober up?', answer: 'The body eliminates alcohol at approximately 0.015% BAC per hour. A rough estimate is one hour per standard drink, but this varies by individual. Coffee, cold showers, and food do not speed up alcohol metabolism.' },
  ],

  // ══════════════════════════════════════════════════════════════
  // MARKETING
  // ══════════════════════════════════════════════════════════════

  'roas-calculator': [
    { question: 'What is a good ROAS for my business?', answer: 'A 4:1 ROAS ($4 revenue per $1 ad spend) is commonly considered good, but the ideal depends on margins. High-margin businesses profit at 2:1; low-margin businesses may need 5:1+. Use the break-even ROAS calculator to find your minimum.' },
    { question: 'How do I calculate ROAS?', answer: 'ROAS = attributed revenue / ad spend. For example, $20,000 revenue from a $5,000 campaign = 4.0x ROAS. Only include revenue directly attributed to the advertising campaign using the same date range and attribution model.' },
    { question: 'What is the difference between ROAS and ROI?', answer: 'ROAS compares revenue to ad spend only. ROI includes all costs (product, overhead, operations). A 4x ROAS means $4 revenue per $1 ad spend, but does not automatically mean the campaign is profitable after all costs.' },
    { question: 'How does attribution affect ROAS?', answer: 'Different attribution models (first-click, last-click, linear) assign conversion credit differently. The same campaign can show different ROAS depending on the model. Use consistent attribution when comparing campaigns.' },
  ],

  'break-even-roas-calculator': [
    { question: 'What is break-even ROAS?', answer: 'Break-even ROAS is the minimum return needed for gross profit to cover ad spend. Formula: 1 / gross margin. At 40% margin, break-even ROAS = 2.5x. Any ROAS above this means the campaign is profitable.' },
    { question: 'How do I calculate my break-even ROAS?', answer: 'Divide 1 by your gross margin (as decimal). If your product costs $60 and sells for $100, margin is 40%. Break-even ROAS = 1 / 0.40 = 2.5x. You need $2.50 in revenue for every $1 in ad spend to break even.' },
    { question: 'How do I improve ROAS above break-even?', answer: 'Improve conversion rate, increase average order value, reduce ad waste through better targeting, optimize landing pages, test ad creatives, and refine audience segments. Small conversion improvements dramatically improve ROAS.' },
  ],

  'ad-spend-calculator': [
    { question: 'How much should I spend on ads?', answer: 'Enter your revenue goal and target ROAS. The calculator shows your maximum allowable ad spend. For example, a $50,000 goal at 4x ROAS allows $12,500 in ad spend. Adjust your target based on margins and profit goals.' },
    { question: 'How do I calculate a daily ad budget?', answer: 'Divide total campaign budget by campaign days. $12,500 over 30 days = $416.67/day. Actual platform spending may vary day to day. Use this as a planning average and monitor performance weekly.' },
  ],

  'cac-calculator': [
    { question: 'What is customer acquisition cost (CAC)?', answer: 'CAC = (marketing costs + sales costs) / new customers acquired. For example, $10,000 costs acquiring 150 customers = $66.67 CAC. Your CAC should be lower than customer lifetime value (LTV) to be profitable.' },
    { question: 'What is a good CAC to LTV ratio?', answer: 'A 3:1 LTV to CAC ratio is the standard benchmark. A customer should be worth at least 3x what you spent to acquire them. Below 1:1 means losing money. Above 5:1 may indicate under-investment in growth.' },
    { question: 'How do I reduce my CAC?', answer: 'Improve targeting, optimize conversion funnels, increase organic traffic through SEO, leverage referrals, improve ad creatives, and eliminate underperforming channels. Track CAC by channel to identify the most efficient acquisition sources.' },
  ],

  'ltv-calculator': [
    { question: 'How do I calculate customer lifetime value?', answer: 'LTV = average order value x purchases per year x customer lifespan. Apply gross margin for profit-based LTV. For example: $75 AOV x 4 purchases/year x 3 years = $900 revenue LTV. At 50% margin = $450 profit LTV.' },
    { question: 'What is a good LTV to CAC ratio?', answer: 'A 3:1 ratio is the standard benchmark. Below 3:1 suggests over-spending on acquisition. Above 5:1 may indicate under-investment in growth. The right ratio depends on your payback period and growth stage.' },
    { question: 'How do I increase my customer LTV?', answer: 'Increase AOV through upselling and bundling, improve retention through loyalty programs, increase purchase frequency through targeted campaigns, and reduce churn through better customer experience and support.' },
  ],

  'cpc-calculator': [
    { question: 'What is a good CPC?', answer: 'CPC varies by industry and platform. Google Search: $1-4 (B2C), $5-50 (B2B). Meta: $0.50-2.00. A "good" CPC is one that allows profitable conversions within your budget. Focus on cost per conversion, not just CPC.' },
    { question: 'How do I lower my CPC?', answer: 'Improve Quality Score through better ad relevance, narrow targeting, test ad creatives, use negative keywords, and bid on long-tail keywords. Higher engagement rates typically lower CPC on auction-based platforms.' },
    { question: 'Is lower CPC always better?', answer: 'No. Low CPC with poor conversion rates wastes money. Focus on cost per conversion (CPA) and ROAS. A $5 CPC with 10% conversion rate is better than a $1 CPC with 1% conversion rate.' },
  ],

  'cpm-calculator': [
    { question: 'What is CPM in advertising?', answer: 'CPM (Cost Per Mille) is the cost per 1,000 impressions. CPM = (total spend / impressions) x 1,000. It is used for brand awareness and reach campaigns. Compare CPM alongside reach, viewability, and downstream conversions.' },
    { question: 'What is a good CPM?', answer: 'CPM varies by platform: Google Display $2-5, Meta $6-10, Instagram $8-12, LinkedIn $30-100, TikTok $5-10. A "good" CPM is below your industry average while maintaining quality impressions and conversions.' },
    { question: 'What is the difference between CPM and CPC?', answer: 'CPM charges per 1,000 impressions (views). CPC charges per click (action). CPM is better for awareness; CPC for traffic and conversions. Some platforms offer both bidding options for the same campaign.' },
  ],

  'cpa-calculator': [
    { question: 'What is cost per acquisition (CPA)?', answer: 'CPA = total ad spend / number of attributed conversions. For example, $5,000 spent generating 200 conversions = $25 CPA. Your CPA should be lower than customer lifetime value (LTV) for profitable acquisition.' },
    { question: 'How do I lower my CPA?', answer: 'Improve landing page conversion rates, refine audience targeting, optimize ad creatives, use retargeting, test bidding strategies, and eliminate underperforming ad groups. Small conversion improvements significantly reduce CPA.' },
    { question: 'What is a good CPA?', answer: 'A good CPA depends on your LTV and margins. If LTV is $200, a $50 CPA is excellent (4:1). If LTV is $60, $50 CPA is barely sustainable. Always compare CPA to LTV, not industry averages alone.' },
  ],

  'conversion-rate-calculator': [
    { question: 'What is a good conversion rate?', answer: 'Average website conversion rates are 2-5%. E-commerce: 2-3%. Landing pages: 5-15%. SaaS free trials: 3-5%. Your "good" rate depends on industry, traffic source, and offer. Track your own trend rather than comparing to others.' },
    { question: 'How do I improve my conversion rate?', answer: 'A/B test headlines and CTAs, improve page load speed, simplify forms, add social proof (testimonials, reviews), use clear copy, reduce checkout friction, and ensure mobile responsiveness. Even small improvements compound over time.' },
    { question: 'What is the difference between CTR and conversion rate?', answer: 'CTR measures clicks out of impressions (ad engagement). Conversion rate measures completions out of visitors (action completion). High CTR with low conversion suggests a landing page problem, not an ad problem.' },
  ],

  'profit-margin-calculator': [
    { question: 'What is the difference between gross and net margin?', answer: 'Gross margin = (revenue - COGS) / revenue. Net margin = (revenue - all costs) / revenue. Gross margin shows production efficiency; net margin shows overall profitability. Both are important for different reasons.' },
    { question: 'What is a good profit margin?', answer: 'Good margins vary by industry: Software/SaaS 70-90% gross, 15-30% net. Retail 25-50% gross, 2-10% net. Manufacturing 25-35% gross, 5-10% net. Compare to industry benchmarks, not general averages.' },
    { question: 'What is the difference between margin and markup?', answer: 'Margin is profit as a percentage of selling price. Markup is profit as a percentage of cost. A $100 item selling for $150 has 33.3% margin and 50% markup. They measure different things and should not be confused.' },
    { question: 'How do I improve my profit margin?', answer: 'Increase prices (if market allows), reduce COGS through bulk purchasing, improve efficiency, focus on higher-margin products, and eliminate unprofitable offerings. Small price increases can significantly improve margins.' },
  ],
};
