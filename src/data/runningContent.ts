export interface FAQItem {
  question: string;
  answer: string;
}

export const runningFaqs: Record<string, FAQItem[]> = {
  'pace-calculator': [
    { question: 'How do you calculate running pace manually?', answer: 'To calculate your running pace manually, divide your total running time by the total distance covered. For example, if you run 5 kilometers in 25 minutes, divide 25 by 5 to get a pace of 5 minutes per kilometer (5:00/km).' },
    { question: 'What is a good running pace for beginners?', answer: 'A good running pace for beginners is typically between 9 and 12 minutes per mile (5:30 to 7:30 per kilometer). However, pace varies greatly depending on age, sex, fitness level, and terrain. Focus on running at a conversational pace where you can speak in full sentences.' },
    { question: 'What is the difference between speed and pace?', answer: 'Speed measures how much distance you cover in a set amount of time (e.g., miles or kilometers per hour, like 10 km/h). Pace is the inverse: the amount of time it takes to cover a set unit of distance (e.g., minutes per kilometer or mile, like 6:00/km). Runners prefer pace because it matches track splits.' },
    { question: 'How does this pace calculator help with split planning?', answer: 'This calculator takes your target time and distance to show exact, even split times for every kilometer or mile checkpoint. This establishes a baseline pace to help you avoid starting a race too fast, which is the most common pacing error.' }
  ],
  'running-pace-calculator': [
    { question: 'How do I find my running pace per mile and kilometer?', answer: 'Enter your total distance and time in the calculator. It automatically divides the time by the distance to show your minutes per kilometer, and multiplies that pace by 1.609344 to show the equivalent minutes per mile. This allows you to track both standards easily.' },
    { question: 'Why does my running pace vary on different days?', answer: 'Your pace is affected by sleep, hydration, weather (heat, humidity, wind), terrain, elevation changes, and accumulated training fatigue. Even if your fitness remains unchanged, these factors can easily shift your pace by 30 to 60 seconds per mile.' },
    { question: 'How do I use my running pace to set training zones?', answer: 'Once you know your current running pace from a recent time trial or race, you can calculate specific training zones. For example, easy recovery runs should be 1.5 to 2 minutes slower per mile than your 5K race pace, while tempo runs should match your 10K to 15K race pace.' }
  ],
  'mile-pace-calculator': [
    { question: 'How do I convert minutes per mile to minutes per kilometer?', answer: 'To convert min/mile to min/km, divide your pace in decimal minutes by 1.609344. For example, an 8:00 per mile pace is 8.0 minutes. Dividing 8.0 by 1.609344 equals approximately 4.97 minutes, which is a 4:58 per kilometer pace.' },
    { question: 'What is a fast mile pace for adults?', answer: 'For recreational runners, a mile time under 7 minutes (7:00/mile or 4:21/km) is considered fast. Sub-6 minutes is highly competitive, and elite runners routinely clock miles under 4 minutes (men) or 4:30 (women).' },
    { question: 'How can a beginner run a faster mile?', answer: 'To run a faster mile, build a foundation of consistent weekly aerobic mileage, introduce short interval sessions (e.g., 200m or 400m repeats), and practice pacing to ensure you do not exhaust yourself in the first quarter-mile.' }
  ],
  '5k-pace-calculator': [
    { question: 'What is a good 5K finish time for beginners?', answer: 'For beginner runners, a 5K finish time between 30 and 40 minutes is an excellent and common goal. This corresponds to an average pace of 9:40 to 12:50 per mile (6:00 to 8:00 per kilometer).' },
    { question: 'What pace is needed to run a sub-20 minute 5K?', answer: 'To run a 5K in under 20 minutes, you must maintain a steady average pace of 6:26 per mile (3:59 per kilometer). Your cumulative splits must hit 5:00 at 1.25km, 10:00 at 2.5km, and 15:00 at 3.75km.' },
    { question: 'What pace is required for a sub-25 minute 5K?', answer: 'Achieving a sub-25 minute 5K requires holding an average pace of 8:03 per mile (5:00 per kilometer). In your splits, you should pass 1 kilometer at 5:00, 2 kilometers at 10:00, 3 kilometers at 15:00, and 4 kilometers at 20:00.' },
    { question: 'How should I pace a 5K race for the best results?', answer: 'The most efficient strategy is even pacing. Start the first kilometer controlled and exactly at target pace. Going out too fast in the first mile floods your muscles with lactic acid, making the final two miles significantly slower and more painful.' }
  ],
  '10k-pace-calculator': [
    { question: 'What is the average 10K running pace?', answer: 'The average 10K running pace for recreational runners is typically between 9:00 and 11:00 minutes per mile (5:36 to 6:50 per kilometer), leading to a finish time between 55 and 70 minutes.' },
    { question: 'What pace is required to run a 10K under 50 minutes?', answer: 'To finish a 10K under 50 minutes, you must average a pace of 8:02 per mile (5:00 per kilometer). Your 5K split should be reached around 25 minutes, keeping the effort even throughout both halves.' },
    { question: 'How do 10K pacing splits differ from a 5K?', answer: 'A 10K requires a more conservative start than a 5K. Because the distance is doubled, you must run at roughly 85-90% of your maximum aerobic capacity. Your 10K pace is typically 15 to 20 seconds per mile slower than your 5K pace.' },
    { question: 'What is a good 10K pacing strategy?', answer: 'Practice a "negative split" or "even split" strategy. Run the first 2-3 kilometers slightly slower than your target average, lock into your target pace for the middle section, and use any remaining energy to accelerate in the final 2 kilometers.' }
  ],
  'half-marathon-pace-calculator': [
    { question: 'What is a respectable half marathon time and pace?', answer: 'For recreational runners, finishing a half marathon (13.1 miles) under 2 hours is a highly popular benchmark. This requires holding a steady pace of 9:09 per mile (5:41 per kilometer).' },
    { question: 'What is the average half marathon time for beginners?', answer: 'Beginner runners usually finish their first half marathon in 2 hours 15 minutes to 2 hours 45 minutes, representing an average pace of 10:18 to 12:35 per mile (6:24 to 7:49 per kilometer).' },
    { question: 'Should I use a negative split strategy for a half marathon?', answer: 'Yes. Running the first half of a half marathon (first 6.5 miles) roughly 5-10 seconds per mile slower than your target average saves critical glycogen stores. This allows you to finish strong without crashing after mile 10.' },
    { question: 'How often should I hit checkpoints during a half marathon?', answer: 'Use the 5K, 10K, and 15K split times generated by this calculator. Checking your cumulative elapsed time at these major markers helps you monitor your pace without checking your watch constantly.' }
  ],
  'marathon-pace-calculator': [
    { question: 'What pace is needed to run a sub-4 hour marathon?', answer: 'To run a marathon under 4 hours, you must maintain a steady average pace of 9:09 per mile (5:41 per kilometer). This yields a projected finish time of 3 hours, 59 minutes, and 36 seconds.' },
    { question: 'What pace is required to run a sub-3 hour marathon?', answer: 'A sub-3 hour marathon requires holding an average pace of 6:51 per mile (4:16 per kilometer) for the entire 26.2 miles. Your half-marathon split must be reached in under 1 hour and 30 minutes.' },
    { question: 'What does it mean to "hit the wall" in a marathon?', answer: '"Hitting the wall" typically happens around mile 20 (32 km) when the body runs out of stored glycogen (carbohydrates) and starts burning fat for fuel, which is much slower. Pacing conservatively and consuming 40-90g of carbs per hour prevents this.' },
    { question: 'How do I use a marathon split table for race day?', answer: 'Review the cumulative 5K splits generated by this calculator. Note down key target times on your arm or a pace band so you can verify if you are on track at major timing mats on the course.' }
  ],
  'race-pace-calculator': [
    { question: 'How do I calculate my pace for a custom race distance?', answer: 'Enter your custom race distance (e.g., a 15K, 10-miler, or 50K ultra) and your target time. The calculator converts the distance to kilometers and miles, then divides the time to give you the exact pacing targets.' },
    { question: 'How do I estimate a realistic race pace?', answer: 'Perform a recent time trial or look at a recent shorter race. You can use Riegel\'s formula (T2 = T1 * (D2/D1)^1.06) to predict your pace for longer distances, assuming you have trained adequately for the volume.' },
    { question: 'Should my race pace match my training pace?', answer: 'No. Most of your training should be run at an "easy" pace (1.5 to 2 minutes slower than race pace). You should only run at target race pace during specific tempo workouts or short split blocks to teach your body the rhythm.' }
  ],
  'finish-time-calculator': [
    { question: 'How do you predict a race finish time from pace?', answer: 'To predict your finish time, multiply your average pace per unit (e.g., 6 minutes per kilometer) by the total distance of the race (e.g., 21.0975 km for a half marathon). The calculator handles the time formatting automatically.' },
    { question: 'What is Riegel\'s formula for race time prediction?', answer: 'Riegel\'s formula is a standard model: T2 = T1 * (D2/D1)^1.06. It predicts your finish time (T2) for a target distance (D2) based on a recent time (T1) over a shorter distance (D1). It assumes proper endurance training.' },
    { question: 'Why is my actual finish time slower than the calculator\'s prediction?', answer: 'Calculators assume even effort, ideal weather, and flat terrain. Real-world factor changes like high heat, heavy wind, steep hills, poor hydration, or starting too fast will increase your final time.' }
  ],
  'swim-pace-calculator': [
    { question: 'How is swim pace calculated?', answer: 'Swim pace is traditionally calculated as the time taken to swim 100 meters or 100 yards. For example, if you swim 1500 meters in 30 minutes, your average pace is 2 minutes per 100 meters (2:00/100m).' },
    { question: 'What is a good swim pace for a triathlete?', answer: 'For recreational triathletes, a swim pace between 1:45 and 2:15 per 100 meters is common and respectable. Advanced swimmers and elites hold paces under 1:20 per 100m.' },
    { question: 'Does pool length change my average swim pace?', answer: 'Yes. Swimmers are generally faster in short-course pools (25m or 25yd) than long-course pools (50m) because short pools provide more turns, allowing for frequent push-offs and under-water glide phases.' },
    { question: 'Can I swap meters and yards in swim pacing?', answer: 'No. 100 meters is roughly 109 yards. If you calculate your pace in meters but swim in a yards pool, your timing splits will be off by about 9%. Keep the units consistent with the pool markings.' }
  ],
  'treadmill-pace-calculator': [
    { question: 'How do I convert treadmill speed to running pace?', answer: 'To convert treadmill speed (usually measured in mph or km/h) to running pace, divide 60 by the speed. For example, a speed of 10 km/h corresponds to a pace of 6 minutes per kilometer (60 / 10 = 6:00/km).' },
    { question: 'Why does treadmill running feel different than outdoor running?', answer: 'On a treadmill, there is no wind resistance, the belt helps pull your legs back, and the surface is perfectly flat and cushioned. However, the lack of air flow can increase body temperature, making it feel harder mentally.' },
    { question: 'What incline simulates running outdoors?', answer: 'A common rule of thumb is to set the treadmill incline to 1.0% to simulate the energy cost and wind resistance of running on flat ground outdoors at speeds faster than 8 mph (13 km/h).' },
    { question: 'How do I convert 6 mph to running pace?', answer: 'A speed of 6 mph equals a 10:00 minutes-per-mile pace. To convert to kilometers, 6 mph is roughly 9.66 km/h, which equals a pace of 6:13 per kilometer.' }
  ],
  'run-walk-pace-calculator': [
    { question: 'What is the Jeff Galloway run-walk method?', answer: 'The Galloway run-walk method is a training strategy where you alternate running segments with short, walked recovery periods (e.g., run 3 minutes, walk 1 minute). This reduces muscle fatigue and joint impact, helping runners complete long distances with faster recovery.' },
    { question: 'How is average pace calculated for run-walk intervals?', answer: 'It is not a simple average of the two paces. Instead, you calculate the distance covered during the running portion and walking portion, add them to get total cycle distance, and divide total cycle time by that distance.' },
    { question: 'Is the run-walk method slower than continuous running?', answer: 'Not necessarily. For many beginners and marathoners, run-walk intervals prevent late-race muscle breakdown, leading to fastest overall finish times because they avoid a severe slowdown in the final miles.' },
    { question: 'What are common run-walk interval ratios?', answer: 'Popular ratios include: 1:1 (run 1 min, walk 1 min) for beginners; 3:1 or 4:1 for intermediate runners; and 5:1 or 8:1 for advanced runners targeting marathons.' }
  ],
  'training-pace-calculator': [
    { question: 'How do I find my easy, tempo, and threshold training paces?', answer: 'Input a recent race time (like a 5K). The calculator uses established physiological formulas to output training ranges: Easy runs (aerobic base), Tempo runs (lactate threshold), and Interval runs (VO2 Max).' },
    { question: 'Why should easy runs be run at a slow pace?', answer: 'Easy runs (run at 60-75% of max heart rate) build capillary pathways, increase mitochondrial density, and strengthen tendons without overtaxing your recovery systems, allowing you to train consistently.' },
    { question: 'What is the difference between tempo and threshold pace?', answer: 'Threshold pace is the maximum speed you can sustain for one hour with lactate clearance matching production (comfortably hard). Tempo pace is slightly slower, used for continuous 20-40 minute runs to build mental and physical stamina.' }
  ],
  'grade-adjusted-pace-calculator': [
    { question: 'What is Grade Adjusted Pace (GAP)?', answer: 'Grade Adjusted Pace (GAP) is an estimate of what your pace would be if you were running on perfectly flat ground at the same level of cardiovascular effort. It adjusts your actual pace based on the uphill or downhill slope.' },
    { question: 'How much does running uphill slow you down?', answer: 'As a rule of thumb, every 1% of uphill grade slows your pace by roughly 2 to 4 seconds per kilometer (3 to 6 seconds per mile). Steeper grades increase the energy cost exponentially.' },
    { question: 'Does running downhill make you equally faster?', answer: 'No. While gentle downhills (up to -4%) reduce effort and make you faster, steep downhills (past -8%) actually slow you down or maintain the same pace because of the high eccentric muscle impact and braking forces.' },
    { question: 'Why should I track Grade Adjusted Pace?', answer: 'Tracking GAP helps you evaluate workouts run on hilly routes. It proves that a slower average pace on a hilly course can represent the same or higher cardiovascular workload as a fast flat run.' }
  ],
  'zone-2-pace-calculator': [
    { question: 'What is Zone 2 running pace?', answer: 'Zone 2 running pace is a low-intensity, purely aerobic effort where your body primarily burns fat for fuel. It corresponds to roughly 60-70% of your maximum heart rate, or a pace where you can easily hold a full conversation.' },
    { question: 'How do I calculate my Zone 2 pace range?', answer: 'This calculator estimates your Zone 2 pace using a recent 5K race result. It calculates the pace range that keeps your effort within the aerobic fat-burning window (typically 1.5 to 2.5 minutes slower than 5K pace).' },
    { question: 'Is it better to track Zone 2 by heart rate or pace?', answer: 'Heart rate is more accurate because pace doesn\'t adjust for heat, hills, or dehydration. However, knowing your Zone 2 pace range provides a useful baseline guide for flat routes on normal training days.' },
    { question: 'What are the benefits of Zone 2 training?', answer: 'Zone 2 training builds your aerobic base, increases capillary density, improves cellular recovery, and teaches your muscles to utilize glycogen more efficiently, which is critical for half marathon and marathon endurance.' }
  ],
  'tempo-pace-calculator': [
    { question: 'What is a tempo run pace?', answer: 'Tempo run pace is a "comfortably hard" effort that you can maintain for about 40 to 60 minutes in a race. It is typically 25 to 30 seconds per mile slower than your current 5K race pace.' },
    { question: 'How long should a tempo run workout be?', answer: 'A classic tempo run consists of 20 to 30 minutes at target tempo pace, bookended by a 10-minute warm-up and a 10-minute cool-down. More advanced runners can do longer blocks or tempo intervals.' },
    { question: 'What is the goal of tempo workouts?', answer: 'The goal is to increase your body\'s ability to clear lactic acid from the bloodstream. By running exactly at this boundary, you push your threshold speed higher, allowing you to run faster for longer distances.' }
  ],
  'threshold-pace-calculator': [
    { question: 'What is lactate threshold pace?', answer: 'Lactate threshold pace is the speed at which lactic acid begins to accumulate in your muscles faster than your body can clear it. In well-trained runners, it corresponds to the maximum pace they can hold for one hour.' },
    { question: 'How is threshold pace calculated?', answer: 'This tool estimates threshold pace by using a recent 5K race performance. Because a 5K is run slightly above lactate threshold, the calculator adds a mathematical buffer (typically 12 to 25 seconds per kilometer) to estimate your true threshold boundary.' },
    { question: 'How often should I run threshold workouts?', answer: 'Threshold workouts (like 3 x 2km with short recovery) should be limited to once a week, accounting for roughly 10% to 15% of your total weekly running volume.' }
  ],
  'easy-run-pace-calculator': [
    { question: 'How slow should my easy run pace be?', answer: 'Your easy run pace should be roughly 1.5 to 2.5 minutes per mile (60 to 120 seconds per kilometer) slower than your current 5K race pace. It should feel conversational and effortless.' },
    { question: 'Will running too slow hurt my race fitness?', answer: 'No. Running slowly builds aerobic fitness, strengthens connective tissues, and allows your body to recover from hard workouts. The most common mistake recreational runners make is running their easy runs too fast.' },
    { question: 'What percentage of training should be at an easy pace?', answer: 'According to the 80/20 rule of training, roughly 80% of your weekly running volume should be completed at an easy, conversational pace, leaving only 20% for high-intensity sessions.' }
  ],
  'long-run-pace-calculator': [
    { question: 'What is a good pace for a weekly long run?', answer: 'Your weekly long run pace should be roughly 45 to 100 seconds per kilometer (1 to 2 minutes per mile) slower than your target race pace. The primary goal is time-on-feet and aerobic endurance, not speed.' },
    { question: 'Should my long run pace match my marathon goal pace?', answer: 'Generally, no. Running your entire long run at marathon goal pace builds excessive fatigue and increases injury risk. Save marathon-pace running for specific, structured blocks inside your long runs (e.g., final 5 miles).' },
    { question: 'How do I prevent running my long runs too fast?', answer: 'Monitor your breathing or heart rate. You should be able to speak in full sentences throughout the run. If you cannot do this, you are running too fast and burning through critical glycogen stores too early.' }
  ]
};

export const defaultFaqs: FAQItem[] = [
  { question: 'Is this calculator free?', answer: 'Yes. It works without an account, subscription or usage limit.' },
  { question: 'Does CalcFino store my result?', answer: 'No. Calculations run in your browser and the entered training data is not sent to CalcFino.' },
  { question: 'Why might my watch show a different pace?', answer: 'A watch may use moving time, auto-pause, smoothed current pace or a GPS-measured distance. This tool uses the exact values you enter.' },
  { question: 'Should I follow the result exactly?', answer: 'No. Use it as a baseline and account for weather, terrain, recovery, experience and health.' }
];

export function getRunningFaqs(slug: string): FAQItem[] {
  return runningFaqs[slug] || defaultFaqs;
}
