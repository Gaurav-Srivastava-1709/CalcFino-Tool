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
  seoTitle?: string;
  category: 'Financial' | 'Health' | 'Marketing';
  group: string;
  kind: GeneralKind;
  description: string;
}

const seoOverrides: Record<string, Pick<GeneralTool, 'seoTitle' | 'description'>> = {
  'mortgage-calculator': {
    seoTitle: 'Mortgage Calculator with Taxes, PMI & Extra Payments',
    description: 'Estimate a mortgage payment with principal, interest, property taxes, insurance, PMI, HOA costs and optional extra payments, then review payoff timing and total cost.',
  },
  'auto-loan-calculator': {
    seoTitle: 'Auto Loan Calculator with Trade-In, Tax & Negative Equity',
    description: 'Estimate an auto loan payment using vehicle price, trade-in value, the amount still owed, sales tax, fees, incentives and your choice of upfront or financed costs.',
  },
  'cd-calculator': {
    seoTitle: 'CD Calculator for Maturity Value & Withdrawal Penalty',
    description: 'Estimate a certificate of deposit maturity balance, interest earned and the effect of an early withdrawal penalty using your deposit, annual rate and term.',
  },
  'savings-calculator': {
    seoTitle: 'Savings Calculator with Monthly Deposits & Compound Growth',
    description: 'Project how an initial balance and monthly deposits may grow with compound interest, and compare your contributions with estimated interest earned.',
  },
  'tdee-calculator': {
    seoTitle: 'TDEE Calculator for Maintenance Calories & Weight Planning',
    description: 'Estimate daily maintenance calories from activity level using Mifflin-St Jeor, Harris-Benedict or Katch-McArdle, with calorie targets for weight planning.',
  },
  'protein-calculator': {
    seoTitle: 'Protein Calculator by Weight, Activity & Grams per Kg',
    description: 'Estimate daily protein in grams from body weight and activity level, with the selected grams-per-kilogram target, a four-meal split and baseline comparison.',
  },
  'due-date-calculator': {
    seoTitle: 'Due Date Calculator by LMP, Conception, Ultrasound or IVF',
    description: 'Estimate a pregnancy due date and gestational age from the last menstrual period, conception date, ultrasound dating, IVF transfer or a known due date.',
  },
  'roas-calculator': {
    seoTitle: 'ROAS Calculator for Return on Ad Spend',
    description: 'Calculate return on ad spend from attributed revenue and advertising cost, with the ROAS ratio, percentage and revenue remaining after ad spend.',
  },
  'break-even-roas-calculator': {
    seoTitle: 'Break-Even ROAS Calculator by Gross Margin',
    description: 'Find the ROAS needed to cover advertising cost from gross margin, and see break-even revenue per dollar of spend and gross profit per order.',
  },
  'ad-spend-calculator': {
    seoTitle: 'Ad Spend Calculator for Revenue & Target ROAS',
    description: 'Calculate a maximum advertising budget from a revenue goal and target ROAS, including an average daily budget for the campaign period.',
  },
  'cac-calculator': {
    seoTitle: 'CAC Calculator for Customer Acquisition Cost',
    description: 'Calculate customer acquisition cost from total sales and marketing spend and the number of new customers acquired in the same period.',
  },
  'ltv-calculator': {
    seoTitle: 'Customer Lifetime Value Calculator for Revenue & Gross Profit',
    description: 'Estimate customer lifetime value from average order value, purchase frequency, customer lifespan and gross margin, with revenue and gross-profit views.',
  },
  'cpc-calculator': {
    seoTitle: 'CPC Calculator for Cost per Click',
    description: 'Calculate average cost per click from total campaign spend and clicks so you can compare paid traffic costs across aligned reporting periods.',
  },
  'cpm-calculator': {
    seoTitle: 'CPM Calculator for Cost per 1,000 Impressions',
    description: 'Calculate cost per thousand impressions from campaign spend and impression volume, with the corresponding cost for a single impression.',
  },
  'cpa-calculator': {
    seoTitle: 'CPA Calculator for Cost per Acquisition',
    description: 'Calculate cost per acquisition from campaign spend and attributed conversions using values from the same reporting and attribution period.',
  },
  'conversion-rate-calculator': {
    seoTitle: 'Conversion Rate Calculator for Visitors & Conversions',
    description: 'Calculate conversion rate from visitors and completed conversions, and see the average number of visitors required for each conversion.',
  },
  'profit-margin-calculator': {
    seoTitle: 'Profit Margin Calculator for Gross & Net Margin',
    description: 'Calculate gross margin, net profit margin and net profit from revenue, cost of goods sold and other operating expenses.',
  },
};

const make = (category: GeneralTool['category'], group: string, kind: GeneralKind, names: string[]): GeneralTool[] => names.map((name) => {
  const slug = name.toLowerCase().replace(/&/g, 'and').replace(/401k/g, '401k').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    name,
    category,
    group,
    kind,
    slug,
    ...(seoOverrides[slug] ?? { description: `Use the free ${name.toLowerCase()} to get a clear estimate with adjustable inputs and instant results.` }),
  };
});

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
    ...seoOverrides['ltv-calculator'],
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
