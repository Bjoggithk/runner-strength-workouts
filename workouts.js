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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-goblet-squat.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/dumbbell-romanian-deadlift.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/cardio/high-knee-against-wall.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-standing-calf-raise.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/band-single-leg-reverse-calf-raise.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/dumbbell-bench-press.gif"
      },
      {
        name: "Bent-over or Seated Row",
        setsReps: "3 × 8–12",
        instructions: [
          "Hinge forward or sit at cable.",
          "Pull elbows back, squeeze shoulder blades.",
          "Control the return."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/dumbbell-bent-over-row.gif"
      },
      {
        name: "Overhead Press",
        setsReps: "3 × 8–10",
        instructions: [
          "Press dumbbells or barbell from shoulders to overhead.",
          "Keep core braced, avoid excessive arch.",
          "Lower with control."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
      },
      {
        name: "Dead Bugs or Plank",
        setsReps: "3 × 10–12 per side or 30–60 s",
        instructions: [
          "Dead bug: Lie on back, opposite arm and leg extend slowly while keeping lower back pressed to floor.",
          "Plank: Forearms or hands, body in straight line, brace core."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/plank.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-single-leg-split-squat.gif"
      },
      {
        name: "Single-leg Romanian Deadlift",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Hinge on one leg, other leg extends back.",
          "Keep hips square, back flat.",
          "Lower dumbbells toward floor, then return."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/dumbbell-single-leg-deadlift.gif"
      },
      {
        name: "Step-ups with Knee Drive",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Step onto box with one foot, drive opposite knee up to 90 degrees.",
          "Step back down with control."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-lunge.gif"
      },
      {
        name: "Single-leg Step-downs",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Same as Gym A: controlled eccentric lower, no push-off with free foot, knee tracks over toes."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
      },
      {
        name: "Hanging Knee Raises or Cable Hip Flexion",
        setsReps: "3 × 8–12",
        instructions: [
          "Hanging: controlled knee raises, no swinging.",
          "Cable: drive knee up against resistance, slow lower.",
          "Pain-free range only."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/assisted-hanging-knee-raise.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–12 per leg",
        instructions: [
          "Rise onto ball of foot, lower slowly.",
          "Hold for balance."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-single-leg-calf-raise.gif"
      },
      {
        name: "Push-ups or Dips",
        setsReps: "3 × 8–15",
        instructions: [
          "Full range or modified as needed.",
          "Keep body straight on push-ups."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/push-up.gif"
      },
      {
        name: "Pull-ups, Lat Pulldown, or Single-arm Row",
        setsReps: "3 × 8–12",
        instructions: [
          "Pull elbows down and back, squeeze shoulder blades."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/pull-up.gif"
      },
      {
        name: "Face Pulls or Band Pull-aparts + Lateral Raises",
        setsReps: "3 × 12–15",
        instructions: [
          "External rotation for face pulls / pull-aparts.",
          "Raise dumbbells to shoulder height for lateral raises."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-lateral-raise.gif"
      },
      {
        name: "Side Plank or Bird Dogs",
        setsReps: "3 × 20–40 s or 8–10 per side",
        instructions: [
          "Side plank: hips stacked, body straight.",
          "Bird dog: opposite arm and leg extend, keep hips level."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/side-plank.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/kettlebell-swing.gif"
      },
      {
        name: "Hip Thrusts",
        setsReps: "3 × 8–12",
        instructions: [
          "Shoulders on bench, drive hips up by squeezing glutes.",
          "Pause at top. Can use barbell or dumbbell."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/barbell-hip-thrust.gif"
      },
      {
        name: "Reverse Lunges or Walking Lunges",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Step back or forward into lunge, front knee tracks over toes.",
          "Drive back to start."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-reverse-lunge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–10 per leg",
        instructions: [
          "Controlled single-leg step-down. Knee tracks over toes."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
      },
      {
        name: "Banded or Cable Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Drive knee up against resistance, slow lower.",
          "Pain-free."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/cardio/high-knee-against-wall.gif"
      },
      {
        name: "Bent-knee Calf Raises + Tibialis Raises",
        setsReps: "3 × 12–15 each",
        instructions: [
          "Soleus: knees bent for calf raises.",
          "Tibialis: lift toes."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-seated-calf-raise.gif"
      },
      {
        name: "Kettlebell or Dumbbell Floor/Bench Press",
        setsReps: "3 × 8–12",
        instructions: [
          "Press from chest or floor."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/dumbbell-floor-press.gif"
      },
      {
        name: "Kettlebell Rows or Renegade Rows",
        setsReps: "3 × 8–12 per side",
        instructions: [
          "Row while keeping hips stable."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/dumbbell-bent-over-row.gif"
      },
      {
        name: "Kettlebell Halo or Dumbbell Shoulder Press",
        setsReps: "3 × 8–10",
        instructions: [
          "Halo: circle kettlebell around head.",
          "Or standard shoulder press."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif"
      },
      {
        name: "Plank Variations or Hanging Leg Raises",
        setsReps: "3 sets",
        instructions: [
          "Hold plank or controlled hanging raises if tolerated."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/plank.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/bodyweight-squat.gif"
      },
      {
        name: "Glute Bridges (progress to single-leg)",
        setsReps: "3 × 10–15",
        instructions: [
          "Lie on back, feet flat, drive hips up by squeezing glutes.",
          "Single-leg: extend one leg."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/bodyweight-glute-bridge.gif"
      },
      {
        name: "Step-downs (stairs or sturdy chair)",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled lower, light tap, drive back up. Knee tracks over toes."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
      },
      {
        name: "Banded Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Mini band around feet or thighs.",
          "Drive knee up to ~90 degrees, slow lower.",
          "Stay tall."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/cardio/high-knee-against-wall.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–15 per leg",
        instructions: [
          "Rise onto ball of foot, lower slowly."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-single-leg-calf-raise.gif"
      },
      {
        name: "Tibialis Raises or Heel Walks",
        setsReps: "3 × 15–20 or 20–30 steps",
        instructions: [
          "Lift toes against wall or walk on heels."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/band-single-leg-reverse-calf-raise.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Elevate hands if needed. Body in straight line."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/push-up.gif"
      },
      {
        name: "Banded Rows",
        setsReps: "3 × 10–15",
        instructions: [
          "Band under feet or anchored. Pull elbows back."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/band-bent-over-row.gif"
      },
      {
        name: "Banded Shoulder Press or Pike Push-ups",
        setsReps: "3 × 8–12",
        instructions: [
          "Press band overhead or perform pike push-ups."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/band-shoulder-press.gif"
      },
      {
        name: "Dead Bugs or Forearm Plank",
        setsReps: "3 × 10–12 per side or 30–60 s",
        instructions: [
          "Keep core braced, lower back flat on dead bugs."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/plank.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-single-leg-split-squat.gif"
      },
      {
        name: "Single-leg Glute Bridges",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "One foot planted, other leg extended. Drive hips up."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/bodyweight-single-leg-glute-bridge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled eccentric, knee tracking."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
      },
      {
        name: "Lying Leg Lifts or Banded Knee Drives",
        setsReps: "3 × 8–12",
        instructions: [
          "Lying: slow leg lifts, back flat.",
          "Or banded standing knee drives."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/lying-leg-raise.gif"
      },
      {
        name: "Single-leg Calf Raises",
        setsReps: "3 × 10–15 per",
        instructions: [
          "Slow and controlled."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-single-leg-calf-raise.gif"
      },
      {
        name: "Banded Lateral Walks or Clamshells",
        setsReps: "3 × 12–15 per side",
        instructions: [
          "Band around knees or ankles. Step sideways or open knee for clams."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/band-clamshell.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Standard or close-grip."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/push-up.gif"
      },
      {
        name: "Banded Rows",
        setsReps: "3 × 10–15",
        instructions: [
          "Pull elbows back, squeeze shoulder blades."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/band-bent-over-row.gif"
      },
      {
        name: "Band Pull-aparts + Overhead Band Presses",
        setsReps: "3 × 12–15",
        instructions: [
          "Pull band apart at chest height, then press overhead."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/band-pull-apart.gif"
      },
      {
        name: "Bird Dogs or Side Planks",
        setsReps: "3 × 8–10 per side or 20–40 s",
        instructions: [
          "Keep hips level and core braced."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/bird-dog.gif"
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
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/band-squat.gif"
      },
      {
        name: "Banded Hip Thrusts or Single-leg Bridges",
        setsReps: "3 × 10–15",
        instructions: [
          "Band across hips if possible, or standard bridges."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/bodyweight-glute-bridge.gif"
      },
      {
        name: "Step-downs",
        setsReps: "3 × 8–12 per leg",
        instructions: [
          "Controlled single-leg lowering."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-step-up-split-squat.gif"
      },
      {
        name: "Banded Standing Hip Flexion / Knee Drives",
        setsReps: "3 × 10–12 per side",
        instructions: [
          "Drive knee up against band, slow lower."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/cardio/high-knee-against-wall.gif"
      },
      {
        name: "Calf Raises + Tibialis Raises",
        setsReps: "3 × 12–15 each",
        instructions: [
          "Standard calf and toe lifts."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-standing-calf-raise.gif"
      },
      {
        name: "Banded Monster Walks or Lateral Band Walks",
        setsReps: "3 × 10–15 steps each direction",
        instructions: [
          "Band around ankles or knees, step sideways with tension."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/band-lateral-walk.gif"
      },
      {
        name: "Push-ups",
        setsReps: "3 × 8–15",
        instructions: [
          "Maintain straight line from head to heels."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/chest/push-up.gif"
      },
      {
        name: "Banded Face Pulls or Rows",
        setsReps: "3 × 12–15",
        instructions: [
          "Pull band toward face or row elbows back."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/band-bent-over-row.gif"
      },
      {
        name: "Banded Lateral Raises or Shoulder Press",
        setsReps: "3 × 10–15",
        instructions: [
          "Raise arms to sides or press overhead with band."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/band-lateral-raise.gif"
      },
      {
        name: "Plank with Knee Drives or Dead Bugs",
        setsReps: "3 sets",
        instructions: [
          "From plank, drive knees toward chest alternately, or perform dead bugs."
        ],
        image: "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/plank.gif"
      }
    ]
  }
};