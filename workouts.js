const workouts = {
  gymA: {
    name: "Gym A – Bilateral Strength",
    exercises: [
      {
        name: "Goblet or Back Squat",
        setsReps: "3 × 8–10",
        instructions: [
          "Hold a dumbbell or kettlebell at chest (goblet) or use a barbell on your back.",
          "Feet shoulder-width, toes slightly out.",
          "Sit back and down, keeping chest up and knees tracking over toes.",
          "Drive through heels to stand. Focus on controlled tempo."
        ],
        image: "https://media.tenor.com/images/placeholder-squat.gif" // Replace with real GIF URL
      },
      {
        name: "Romanian Deadlift",
        setsReps: "3 × 8–10",
        instructions: [
          "Hold dumbbells or barbell in front of thighs.",
          "Hinge at hips, slight knee bend, push hips back.",
          "Lower until you feel a stretch in hamstrings, keep back flat.",
          "Drive hips forward to stand, squeeze glutes."
        ],
        image: "https://media.tenor.com/images/placeholder-rdl.gif"
      },
      {
        name: "Single-leg Step-downs",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Stand on a box or step with one foot, other foot hanging off the side.",
          "Slowly bend the standing knee and lower the free foot toward the floor.",
          "Lightly tap the floor (do not push off with it).",
          "Drive back up through the standing heel. Keep knee tracking over toes."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Cable or Band Standing Hip Flexion / Knee Drive",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Attach cable or band low, face away or sideways.",
          "Drive the knee up to about 90 degrees against resistance.",
          "Pause briefly at the top, then lower slowly with control.",
          "Stay tall, core braced. Stop if sharp hip flexor pain."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeflex.gif"
      },
      {
        name: "Standing Calf Raises",
        setsReps: "3 × 12–15",
        instructions: [
          "Stand on a step or flat ground, hold for balance if needed.",
          "Rise up onto the balls of your feet, squeeze calves.",
          "Lower slowly under control.",
          "Can do double or single leg."
        ],
        image: "https://media.tenor.com/images/placeholder-calf.gif"
      },
      {
        name: "Tibialis Raises",
        setsReps: "3 × 15–20",
        instructions: [
          "Lean back against a wall with heels ~30 cm away, or stand tall.",
          "Lift your toes and forefoot as high as possible.",
          "Lower under control.",
          "Helps with shin strength."
        ],
        image: "https://media.tenor.com/images/placeholder-tib.gif"
      },
      {
        name: "Bench Press or Dumbbell Press",
        setsReps: "3 × 8–12",
        instructions: [
          "Lie on bench or floor.",
          "Lower weight to chest with control, elbows ~45 degrees.",
          "Press back up.",
          "Keep shoulders stable."
        ],
        image: "https://media.tenor.com/images/placeholder-bench.gif"
      },
      {
        name: "Bent-over or Seated Row",
        setsReps: "3 × 8–12",
        instructions: [
          "Hinge forward or sit at cable.",
          "Pull elbows back, squeeze shoulder blades.",
          "Control the return."
        ],
        image: "https://media.tenor.com/images/placeholder-row.gif"
      },
      {
        name: "Overhead Press",
        setsReps: "3 × 8–10",
        instructions: [
          "Press dumbbells or barbell from shoulders to overhead.",
          "Keep core braced, avoid excessive arch.",
          "Lower with control."
        ],
        image: "https://media.tenor.com/images/placeholder-ohp.gif"
      },
      {
        name: "Dead Bugs or Plank",
        setsReps: "3 × 10–12 per side or 30–60 s",
        instructions: [
          "Dead bug: Lie on back, opposite arm and leg extend slowly while keeping lower back pressed to floor.",
          "Plank: Forearms or hands, body in straight line, brace core."
        ],
        image: "https://media.tenor.com/images/placeholder-core.gif"
      }
    ]
  },
  gymB: {
    name: "Gym B – Unilateral Focus",
    exercises: [
      {
        name: "Bulgarian Split Squats",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Rear foot elevated on bench, front foot forward.",
          "Lower until back knee is near floor, front knee tracks over toes.",
          "Drive through front heel to stand.",
          "Hold dumbbells if desired."
        ],
        image: "https://media.tenor.com/images/placeholder-bss.gif"
      },
      {
        name: "Single-leg Romanian Deadlift",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Hinge on one leg, other leg extends back.",
          "Keep hips square, back flat.",
          "Lower dumbbells toward floor, then return."
        ],
        image: "https://media.tenor.com/images/placeholder-slrdl.gif"
      },
      {
        name: "Step-ups with Knee Drive",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Step onto box with one foot, drive opposite knee up to 90 degrees.",
          "Step back down with control."
        ],
        image: "https://media.tenor.com/images/placeholder-stepup.gif"
      },
      {
        name: "Single-leg Step-downs",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Same as Gym A: controlled eccentric lower, no push-off with free foot, knee tracks over toes."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Hanging Knee Raises or Cable Hip Flexion",
        setsReps: "3 × 8–12",
        instructions: [
          "Hanging: controlled knee raises, no swinging.",
          "Cable: drive knee up against resistance, slow lower.",
          "Pain-free range only."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeraise.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–12 per leg",
        instructions: [
          "Rise onto ball of foot, lower slowly.",
          "Hold for balance."
        ],
        image: "https://media.tenor.com/images/placeholder-calf.gif"
      },
      {
        name: "Push-ups or Dips",
        setsReps: "3 × 8–15",
        instructions: [
          "Full range or modified as needed.",
          "Keep body straight on push-ups."
        ],
        image: "https://media.tenor.com/images/placeholder-pushup.gif"
      },
      {
        name: "Pull-ups, Lat Pulldown, or Single-arm Row",
        setsReps: "3 × 8–12",
        instructions: [
          "Pull elbows down and back, squeeze shoulder blades."
        ],
        image: "https://media.tenor.com/images/placeholder-pullup.gif"
      },
      {
        name: "Face Pulls or Band Pull-aparts + Lateral Raises",
        setsReps: "3 × 12–15",
        instructions: [
          "External rotation for face pulls / pull-aparts.",
          "Raise dumbbells to shoulder height for lateral raises."
        ],
        image: "https://media.tenor.com/images/placeholder-facepull.gif"
      },
      {
        name: "Side Plank or Bird Dogs",
        setsReps: "3 × 20–40 s or 8–10 per side",
        instructions: [
          "Side plank: hips stacked, body straight.",
          "Bird dog: opposite arm and leg extend, keep hips level."
        ],
        image: "https://media.tenor.com/images/placeholder-sideplank.gif"
      }
    ]
  },
  gymC: {
    name: "Gym C – Kettlebell / Posterior Chain",
    exercises: [
      {
        name: "Kettlebell Swings",
        setsReps: "3 × 12–15",
        instructions: [
          "Hinge and swing the kettlebell to chest/shoulder height using hip drive.",
          "Keep arms relaxed, power from glutes."
        ],
        image: "https://media.tenor.com/images/placeholder-swing.gif"
      },
      {
        name: "Hip Thrusts",
        setsReps: "3 × 8–12",
        instructions: [
          "Shoulders on bench, drive hips up by squeezing glutes.",
          "Pause at top. Can use barbell or dumbbell."
        ],
        image: "https://media.tenor.com/images/placeholder-thrust.gif"
      },
      {
        name: "Reverse Lunges or Walking Lunges",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Step back or forward into lunge, front knee tracks over toes.",
          "Drive back to start."
        ],
        image: "https://media.tenor.com/images/placeholder-lunge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Controlled single-leg step-down. Knee tracks over toes."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Banded or Cable Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Drive knee up against resistance, slow lower.",
          "Pain-free."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeflex.gif"
      },
      {
        name: "Bent-knee Calf Raises + Tibialis Raises",
        setsReps: "3 × 12–15 each",
        instructions: [
          "Soleus: knees bent for calf raises.",
          "Tibialis: lift toes."
        ],
        image: "https://media.tenor.com/images/placeholder-tib.gif"
      },
      {
        name: "Kettlebell or Dumbbell Floor/Bench Press",
        setsReps: "3 × 8–12",
        instructions: [
          "Press from chest or floor."
        ],
        image: "https://media.tenor.com/images/placeholder-bench.gif"
      },
      {
        name: "Kettlebell Rows or Renegade Rows",
        setsReps: "3 × 8–12 per side",
        instructions: [
          "Row while keeping hips stable."
        ],
        image: "https://media.tenor.com/images/placeholder-row.gif"
      },
      {
        name: "Kettlebell Halo or Dumbbell Shoulder Press",
        setsReps: "3 × 8–10",
        instructions: [
          "Halo: circle kettlebell around head.",
          "Or standard shoulder press."
        ],
        image: "https://media.tenor.com/images/placeholder-ohp.gif"
      },
      {
        name: "Plank Variations or Hanging Leg Raises",
        setsReps: "3 sets",
        instructions: [
          "Hold plank or controlled hanging raises if tolerated."
        ],
        image: "https://media.tenor.com/images/placeholder-core.gif"
      }
    ]
  },
  homeA: {
    name: "Home A – Bilateral Base",
    exercises: [
      {
        name: "Bodyweight or Banded Squats",
        setsReps: "3 × 12–15",
        instructions: [
          "Feet shoulder-width, sit back and down, chest up.",
          "Add band under feet for resistance if desired."
        ],
        image: "https://media.tenor.com/images/placeholder-squat.gif"
      },
      {
        name: "Glute Bridges (progress to single-leg)",
        setsReps: "3 × 10–15",
        instructions: [
          "Lie on back, feet flat, drive hips up by squeezing glutes.",
          "Single-leg: extend one leg."
        ],
        image: "https://media.tenor.com/images/placeholder-bridge.gif"
      },
      {
        name: "Step-downs (stairs or sturdy chair)",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled lower, light tap, drive back up. Knee tracks over toes."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Banded Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Mini band around feet or thighs.",
          "Drive knee up to ~90 degrees, slow lower.",
          "Stay tall."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeflex.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–15 per leg",
        instructions: [
          "Rise onto ball of foot, lower slowly."
        ],
        image: "https://media.tenor.com/images/placeholder-calf.gif"
      },
      {
        name: "Tibialis Raises or Heel Walks",
        setsReps: "3 × 15–20 or 20–30 steps",
        instructions: [
          "Lift toes against wall or walk on heels."
        ],
        image: "https://media.tenor.com/images/placeholder-tib.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Elevate hands if needed. Body in straight line."
        ],
        image: "https://media.tenor.com/images/placeholder-pushup.gif"
      },
      {
        name: "Banded Rows",
        setsReps: "3 × 10–15",
        instructions: [
          "Band under feet or anchored. Pull elbows back."
        ],
        image: "https://media.tenor.com/images/placeholder-row.gif"
      },
      {
        name: "Banded Shoulder Press or Pike Push-ups",
        setsReps: "3 × 8–12",
        instructions: [
          "Press band overhead or perform pike push-ups."
        ],
        image: "https://media.tenor.com/images/placeholder-ohp.gif"
      },
      {
        name: "Dead Bugs or Forearm Plank",
        setsReps: "3 × 10–12 per side or 30–60 s",
        instructions: [
          "Keep core braced, lower back flat on dead bugs."
        ],
        image: "https://media.tenor.com/images/placeholder-core.gif"
      }
    ]
  },
  homeB: {
    name: "Home B – Unilateral & Stability",
    exercises: [
      {
        name: "Bulgarian Split Squats (rear foot on chair)",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Rear foot on sofa or chair. Controlled lower and drive up."
        ],
        image: "https://media.tenor.com/images/placeholder-bss.gif"
      },
      {
        name: "Single-leg Glute Bridges",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "One foot planted, other leg extended. Drive hips up."
        ],
        image: "https://media.tenor.com/images/placeholder-bridge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled eccentric, knee tracking."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Lying Leg Lifts or Banded Knee Drives",
        setsReps: "3 × 8–12",
        instructions: [
          "Lying: slow leg lifts, back flat.",
          "Or banded standing knee drives."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeflex.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–15 per",
        instructions: [
          "Slow and controlled."
        ],
        image: "https://media.tenor.com/images/placeholder-calf.gif"
      },
      {
        name: "Banded Lateral Walks or Clamshells",
        setsReps: "3 × 12–15 per side",
        instructions: [
          "Band around knees or ankles. Step sideways or open knee for clams."
        ],
        image: "https://media.tenor.com/images/placeholder-clam.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Standard or close-grip."
        ],
        image: "https://media.tenor.com/images/placeholder-pushup.gif"
      },
      {
        name: "Banded Rows",
        setsReps: "3 × 10–15",
        instructions: [
          "Pull elbows back, squeeze shoulder blades."
        ],
        image: "https://media.tenor.com/images/placeholder-row.gif"
      },
      {
        name: "Band Pull-aparts + Overhead Band Presses",
        setsReps: "3 × 12–15",
        instructions: [
          "Pull band apart at chest height, then press overhead."
        ],
        image: "https://media.tenor.com/images/placeholder-facepull.gif"
      },
      {
        name: "Bird Dogs or Side Planks",
        setsReps: "3 × 8–10 per side or 20–40 s",
        instructions: [
          "Keep hips level and core braced."
        ],
        image: "https://media.tenor.com/images/placeholder-sideplank.gif"
      }
    ]
  },
  homeC: {
    name: "Home C – Band-Focused",
    exercises: [
      {
        name: "Banded Squats",
        setsReps: "3 × 12–15",
        instructions: [
          "Band under feet, squat with tension."
        ],
        image: "https://media.tenor.com/images/placeholder-squat.gif"
      },
      {
        name: "Banded Hip Thrusts or Single-leg Bridges",
        setsReps: "3 × 10–15",
        instructions: [
          "Band across hips if possible, or standard bridges."
        ],
        image: "https://media.tenor.com/images/placeholder-bridge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled single-leg lowering."
        ],
        image: "https://media.tenor.com/images/placeholder-stepdown.gif"
      },
      {
        name: "Banded Standing Hip Flexion / Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Drive knee up against band, slow lower."
        ],
        image: "https://media.tenor.com/images/placeholder-kneeflex.gif"
      },
      {
        name: "Calf Raises + Tibialis Raises",
        setsReps: "3 × 12–15 each",
        instructions: [
          "Standard calf and toe lifts."
        ],
        image: "https://media.tenor.com/images/placeholder-tib.gif"
      },
      {
        name: "Banded Monster Walks or Lateral Band Walks",
        setsReps: "3 × 10–15 steps each direction",
        instructions: [
          "Band around ankles or knees, step sideways with tension."
        ],
        image: "https://media.tenor.com/images/placeholder-clam.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Maintain straight line from head to heels."
        ],
        image: "https://media.tenor.com/images/placeholder-pushup.gif"
      },
      {
        name: "Banded Face Pulls or Rows",
        setsReps: "3 × 12–15",
        instructions: [
          "Pull band toward face or row elbows back."
        ],
        image: "https://media.tenor.com/images/placeholder-row.gif"
      },
      {
        name: "Banded Lateral Raises or Shoulder Press",
        setsReps: "3 × 10–15",
        instructions: [
          "Raise arms to sides or press overhead with band."
        ],
        image: "https://media.tenor.com/images/placeholder-ohp.gif"
      },
      {
        name: "Plank with Knee Drives or Dead Bugs",
        setsReps: "3 sets",
        instructions: [
          "From plank, drive knees toward chest alternately, or perform dead bugs."
        ],
        image: "https://media.tenor.com/images/placeholder-core.gif"
      }
    ]
  }
};