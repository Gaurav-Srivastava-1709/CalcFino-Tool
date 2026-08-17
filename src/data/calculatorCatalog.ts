export type GeneralKind =
  | 'mortgage' | 'loan' | 'auto-loan' | 'credit-card' | 'credit-cards-payoff' | 'debt-payoff' | 'student-loan' | 'personal-loan' | 'business-loan' | 'boat-loan' | 'amortization'
  | 'investment' | 'simple-interest' | 'interest-calculator' | 'compound-interest' | 'savings' | 'cd' | 'bond' | 'present-value' | 'future-value' | 'interest-rate' | 'payback-period' | 'apr' | 'inflation' | 'finance' | 'roi' | 'margin' | 'discount'
  | 'percentage' | 'debt-ratio'
  | 'salary' | 'lease' | 'depreciation' | 'budget' | 'currency' | 'tax'
  | 'bmi' | 'calories' | 'body-fat' | 'ideal-weight' | 'lean-mass'
  | 'one-rep-max' | 'heart-rate' | 'pregnancy' | 'cycle' | 'macros'
  | 'protein' | 'calories-burned' | 'bsa' | 'bac' | 'gfr' | 'pregnancy-weight' | 'body-type'
  | 'roas' | 'break-even-roas' | 'ad-spend' | 'cac' | 'ltv' | 'cpc' | 'cpm'
  | 'cpa' | 'conversion-rate' | 'profit-margin';

export interface GeneralTool {
  slug: string;
  name: string;
  category: 'Financial' | 'Health' | 'Marketing';
  group: string;
  kind: GeneralKind;
  description: string;
}

const make = (category: GeneralTool['category'], group: string, kind: GeneralKind, names: string[]): GeneralTool[] => names.map((name) => ({
  name,
  category,
  group,
  kind,
  slug: name.toLowerCase().replace(/&/g, 'and').replace(/401k/g, '401k').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  description: `Use the free ${name.toLowerCase()} to get a clear estimate with adjustable inputs and instant results.`,
}));

export const financialTools: GeneralTool[] = [
  ...make('Financial', 'Mortgage & real estate', 'mortgage', ['Mortgage Calculator']),
  ...make('Financial', 'Mortgage & real estate', 'amortization', ['Amortization Calculator']),
  ...make('Financial', 'Mortgage & real estate', 'loan', ['Mortgage Payoff Calculator', 'Real Estate Calculator', 'Refinance Calculator', 'FHA Loan Calculator', 'VA Mortgage Calculator', 'Home Equity Loan Calculator', 'HELOC Calculator', 'Down Payment Calculator']),
  ...make('Financial', 'Mortgage & real estate', 'debt-ratio', ['House Affordability Calculator', 'Rent Calculator', 'Debt-to-Income Ratio Calculator', 'Rent vs. Buy Calculator']),
  ...make('Financial', 'Mortgage & real estate', 'investment', ['Rental Property Calculator']),
  ...make('Financial', 'Mortgage & real estate', 'apr', ['APR Calculator']),
  ...make('Financial', 'Auto', 'auto-loan', ['Auto Loan Calculator', 'Cash Back or Low Interest Calculator']),
  ...make('Financial', 'Auto', 'lease', ['Auto Lease Calculator']),
  ...make('Financial', 'Investment', 'interest-calculator', ['Interest Calculator']),
  ...make('Financial', 'Investment', 'investment', ['Investment Calculator']),
  ...make('Financial', 'Investment', 'finance', ['Finance Calculator']),
  ...make('Financial', 'Investment', 'compound-interest', ['Compound Interest Calculator']),
  ...make('Financial', 'Investment', 'interest-rate', ['Interest Rate Calculator']),
  ...make('Financial', 'Investment', 'savings', ['Savings Calculator']),
  ...make('Financial', 'Investment', 'cd', ['CD Calculator']),
  ...make('Financial', 'Investment', 'bond', ['Bond Calculator', 'Mutual Fund Calculator', 'Average Return Calculator', 'IRR Calculator']),
  ...make('Financial', 'Investment', 'payback-period', ['Payback Period Calculator']),
  ...make('Financial', 'Investment', 'present-value', ['Present Value Calculator']),
  ...make('Financial', 'Investment', 'future-value', ['Future Value Calculator']),
  ...make('Financial', 'Investment', 'simple-interest', ['Simple Interest Calculator']),
  ...make('Financial', 'Investment', 'roi', ['ROI Calculator']),
  ...make('Financial', 'Retirement', 'investment', ['Retirement Calculator', '401K Calculator', 'Pension Calculator', 'Social Security Calculator', 'Annuity Calculator', 'Annuity Payout Calculator', 'Roth IRA Calculator', 'IRA Calculator', 'RMD Calculator']),
  ...make('Financial', 'Tax & salary', 'tax', ['Income Tax Calculator', 'Marriage Tax Calculator', 'Estate Tax Calculator', 'Take-Home-Paycheck Calculator', 'Sales Tax Calculator', 'VAT Calculator']),
  ...make('Financial', 'Tax & salary', 'salary', ['Salary Calculator']),
  ...make('Financial', 'Tax & salary', 'tax', ['Commission Calculator']),
  ...make('Financial', 'Loans & debt', 'loan', ['Loan Calculator', 'Payment Calculator', 'Repayment Calculator', 'Student Loan Calculator', 'College Cost Calculator', 'Debt Consolidation Calculator']),
  ...make('Financial', 'Loans & debt', 'credit-card', ['Credit Card Calculator']),
  ...make('Financial', 'Loans & debt', 'credit-cards-payoff', ['Credit Cards Payoff Calculator']),
  ...make('Financial', 'Loans & debt', 'debt-payoff', ['Debt Payoff Calculator']),
  ...make('Financial', 'Loans & debt', 'personal-loan', ['Personal Loan Calculator']),
  ...make('Financial', 'Loans & debt', 'business-loan', ['Business Loan Calculator']),
  ...make('Financial', 'Loans & debt', 'boat-loan', ['Boat Loan Calculator']),
  ...make('Financial', 'Other', 'currency', ['Currency Calculator']),
  ...make('Financial', 'Other', 'inflation', ['Inflation Calculator']),
  ...make('Financial', 'Other', 'depreciation', ['Depreciation Calculator']),
  ...make('Financial', 'Other', 'margin', ['Margin Calculator']),
  ...make('Financial', 'Other', 'discount', ['Discount Calculator']),
  ...make('Financial', 'Other', 'lease', ['Lease Calculator']),
  ...make('Financial', 'Other', 'budget', ['Budget Calculator']),
];

export const healthTools: GeneralTool[] = [
  ...make('Health', 'Fitness', 'bmi', ['BMI Calculator', 'Healthy Weight Calculator']),
  ...make('Health', 'Fitness', 'calories', ['Calorie Calculator', 'BMR Calculator', 'TDEE Calculator']),
  ...make('Health', 'Fitness', 'body-fat', ['Body Fat Calculator', 'Army Body Fat Calculator']),
  ...make('Health', 'Fitness', 'ideal-weight', ['Ideal Weight Calculator']),
  ...make('Health', 'Fitness', 'lean-mass', ['Lean Body Mass Calculator']),
  ...make('Health', 'Fitness', 'calories-burned', ['Calories Burned Calculator']),
  ...make('Health', 'Fitness', 'one-rep-max', ['One Rep Max Calculator']),
  ...make('Health', 'Fitness', 'heart-rate', ['Target Heart Rate Calculator']),
  ...make('Health', 'Pregnancy', 'pregnancy', ['Pregnancy Calculator', 'Pregnancy Conception Calculator', 'Due Date Calculator']),
  ...make('Health', 'Pregnancy', 'pregnancy-weight', ['Pregnancy Weight Gain Calculator']),
  ...make('Health', 'Pregnancy', 'cycle', ['Ovulation Calculator', 'Conception Calculator', 'Period Calculator']),
  ...make('Health', 'Nutrition', 'macros', ['Macro Calculator', 'Carbohydrate Calculator', 'Fat Intake Calculator']),
  ...make('Health', 'Nutrition', 'protein', ['Protein Calculator']),
  ...make('Health', 'Other', 'gfr', ['GFR Calculator']),
  ...make('Health', 'Other', 'body-type', ['Body Type Calculator']),
  ...make('Health', 'Other', 'bsa', ['Body Surface Area Calculator']),
  ...make('Health', 'Other', 'bac', ['BAC Calculator']),
];

export const marketingTools: GeneralTool[] = [
  ...make('Marketing', 'Advertising returns', 'roas', ['ROAS Calculator']),
  ...make('Marketing', 'Advertising returns', 'break-even-roas', ['Break-Even ROAS Calculator']),
  ...make('Marketing', 'Advertising returns', 'ad-spend', ['Ad Spend Calculator']),
  ...make('Marketing', 'Customer economics', 'cac', ['CAC Calculator']),
  {
    name: 'Customer Lifetime Value (LTV) Calculator',
    category: 'Marketing',
    group: 'Customer economics',
    kind: 'ltv',
    slug: 'ltv-calculator',
    description: 'Calculate customer lifetime value from average order value, purchase frequency, customer lifespan and gross margin.',
  },
  ...make('Marketing', 'Campaign costs', 'cpc', ['CPC Calculator']),
  ...make('Marketing', 'Campaign costs', 'cpm', ['CPM Calculator']),
  ...make('Marketing', 'Campaign costs', 'cpa', ['CPA Calculator']),
  ...make('Marketing', 'Conversion & profit', 'conversion-rate', ['Conversion Rate Calculator']),
  ...make('Marketing', 'Conversion & profit', 'profit-margin', ['Profit Margin Calculator']),
];

export const categorySlug = (tool: GeneralTool) => tool.category === 'Financial' ? 'financial' : tool.category === 'Health' ? 'health' : 'marketing';
export const categoryDirectory = (tool: GeneralTool) => `/${categorySlug(tool)}-calculators`;
export const generalTools = [...financialTools, ...healthTools, ...marketingTools];
export const financialGroups = [...new Set(financialTools.map((tool) => tool.group))];
export const healthGroups = [...new Set(healthTools.map((tool) => tool.group))];
export const marketingGroups = [...new Set(marketingTools.map((tool) => tool.group))];
