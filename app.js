let currentWorkout = null;
let currentIndex = 0;
let currentWorkoutId = null;

const selector = document.getElementById('selector');
const workoutScreen = document.getElementById('workout');
const completeScreen = document.getElementById('complete');
const progressFill = document.getElementById('progress');
const exerciseName = document.getElementById('exercise-name');
const setsReps = document.getElementById('sets-reps');
const instructions = document.getElementById('instructions');
const exerciseImage = document.getElementById('exercise-image');
const setsCheckboxes = document.getElementById('sets-checkboxes');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-to-menu');
const restartBtn = document.getElementById('restart-btn');

function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function getSetsCount(setsRepsStr) {
  const match = setsRepsStr.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 3;
}

function getStorageKey() {
  return `workout_${currentWorkoutId}_ex_${currentIndex}`;
}

function loadCheckedSets() {
  try {
    const saved = localStorage.getItem(getStorageKey());
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCheckedSets(checked) {
  localStorage.setItem(getStorageKey(), JSON.stringify(checked));
}

function renderSets(ex) {
  const numSets = getSetsCount(ex.setsReps);
  const checked = loadCheckedSets();
  setsCheckboxes.innerHTML = '';

  for (let i = 0; i < numSets; i++) {
    const label = document.createElement('label');
    label.className = 'set-checkbox' + (checked.includes(i) ? ' checked' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked.includes(i);
    checkbox.dataset.setIndex = i;

    checkbox.addEventListener('change', () => {
      const currentChecked = loadCheckedSets();
      if (checkbox.checked) {
        if (!currentChecked.includes(i)) currentChecked.push(i);
      } else {
        const idx = currentChecked.indexOf(i);
        if (idx > -1) currentChecked.splice(idx, 1);
      }
      saveCheckedSets(currentChecked);
      label.classList.toggle('checked', checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = `Set ${i + 1}`;

    label.appendChild(checkbox);
    label.appendChild(span);
    setsCheckboxes.appendChild(label);
  }
}

function renderExercise() {
  const exercises = currentWorkout.exercises;
  const ex = exercises[currentIndex];

  exerciseName.textContent = ex.name;
  setsReps.textContent = ex.setsReps;

  instructions.innerHTML = '<ul>' + ex.instructions.map(i => `<li>${i}</li>`).join('') + '</ul>';

  // Image handling
  exerciseImage.innerHTML = '';
  if (ex.image && !ex.image.includes('placeholder')) {
    const img = document.createElement('img');
    img.src = ex.image;
    img.alt = ex.name;
    img.onerror = () => {
      exerciseImage.textContent = ex.name + ' (GIF unavailable)';
    };
    exerciseImage.appendChild(img);
  } else {
    exerciseImage.textContent = ex.name;
  }

  // Sets checkboxes
  renderSets(ex);

  // Progress
  const pct = ((currentIndex + 1) / exercises.length) * 100;
  progressFill.style.width = pct + '%';

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === exercises.length - 1 ? 'Finish' : 'Next →';
}

function startWorkout(id) {
  currentWorkoutId = id;
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