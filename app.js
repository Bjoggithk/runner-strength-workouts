let currentWorkout = null;
let currentIndex = 0;

const selector = document.getElementById('selector');
const workoutScreen = document.getElementById('workout');
const completeScreen = document.getElementById('complete');
const progressFill = document.getElementById('progress');
const exerciseName = document.getElementById('exercise-name');
const setsReps = document.getElementById('sets-reps');
const instructions = document.getElementById('instructions');
const exerciseImage = document.getElementById('exercise-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-to-menu');
const restartBtn = document.getElementById('restart-btn');

function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function renderExercise() {
  const exercises = currentWorkout.exercises;
  const ex = exercises[currentIndex];

  exerciseName.textContent = ex.name;
  setsReps.textContent = ex.setsReps;

  instructions.innerHTML = '<ul>' + ex.instructions.map(i => `<li>${i}</li>`).join('') + '</ul>';

  // Image handling – show GIF if valid, otherwise placeholder text
  exerciseImage.innerHTML = '';
  if (ex.image && !ex.image.includes('placeholder')) {
    const img = document.createElement('img');
    img.src = ex.image;
    img.alt = ex.name;
    img.onerror = () => {
      exerciseImage.textContent = ex.name + ' (add your own GIF URL in workouts.js)';
    };
    exerciseImage.appendChild(img);
  } else {
    exerciseImage.textContent = ex.name + '\n\n(Replace placeholder image URL in workouts.js with a real GIF for visual demo)';
  }

  // Progress
  const pct = ((currentIndex + 1) / exercises.length) * 100;
  progressFill.style.width = pct + '%';

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === exercises.length - 1 ? 'Finish' : 'Next →';
}

function startWorkout(id) {
  currentWorkout = workouts[id];
  currentIndex = 0;
  showScreen(workoutScreen);
  renderExercise();
}

document.querySelectorAll('.workout-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    startWorkout(btn.dataset.id);
  });
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderExercise();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentWorkout.exercises.length - 1) {
    currentIndex++;
    renderExercise();
  } else {
    showScreen(completeScreen);
  }
});

backBtn.addEventListener('click', () => {
  showScreen(selector);
});

restartBtn.addEventListener('click', () => {
  showScreen(selector);
});

// Initial screen
showScreen(selector);