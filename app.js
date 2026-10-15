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
  const match = String(setsRepsStr).match(/^(\d+)/);
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

function clearWorkoutProgress(workoutId) {
  if (!workoutId) return;
  const prefix = `workout_${workoutId}_ex_`;
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(prefix)) keysToRemove.push(key);
  }
  keysToRemove.forEach(key => localStorage.removeItem(key));
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
  if (!currentWorkout || !currentWorkout.exercises || currentWorkout.exercises.length === 0) {
    exerciseName.textContent = 'No exercises found';
    setsReps.textContent = '';
    instructions.innerHTML = '';
    exerciseImage.innerHTML = '';
    setsCheckboxes.innerHTML = '';
    return;
  }

  // Safety: clamp index
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= currentWorkout.exercises.length) currentIndex = 0;

  const exercises = currentWorkout.exercises;
  const ex = exercises[currentIndex];

  exerciseName.textContent = ex.name || 'Exercise';
  setsReps.textContent = ex.setsReps || '';

  instructions.innerHTML = '<ul>' + (ex.instructions || []).map(i => `<li>${i}</li>`).join('') + '</ul>';

  exerciseImage.innerHTML = '';
  if (ex.image && !ex.image.includes('placeholder')) {
    const img = document.createElement('img');
    img.src = ex.image;
    img.alt = ex.name;
    img.onerror = () => { exerciseImage.textContent = (ex.name || 'Exercise') + ' (GIF unavailable)'; };
    exerciseImage.appendChild(img);
  } else {
    exerciseImage.textContent = ex.name || 'Exercise';
  }

  renderSets(ex);

  const pct = ((currentIndex + 1) / exercises.length) * 100;
  progressFill.style.width = pct + '%';

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === exercises.length - 1 ? 'Finish' : 'Next →';
}

function startWorkout(id) {
  currentWorkoutId = id;
  currentWorkout = workouts[id];

  if (!currentWorkout || !currentWorkout.exercises) {
    alert('Workout data missing. Please refresh the page.');
    return;
  }

  // Always force start at the very beginning
  currentIndex = 0;
  clearWorkoutProgress(id);

  showScreen(workoutScreen);
  renderExercise();
}

// Attach listeners only once
document.querySelectorAll('.workout-btn').forEach(btn => {
  btn.addEventListener('click', () => startWorkout(btn.dataset.id));
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderExercise();
  }
});

nextBtn.addEventListener('click', () => {
  if (!currentWorkout) return;
  if (currentIndex < currentWorkout.exercises.length - 1) {
    currentIndex++;
    renderExercise();
  } else {
    if (currentWorkoutId) clearWorkoutProgress(currentWorkoutId);
    showScreen(completeScreen);
  }
});

backBtn.addEventListener('click', () => {
  if (currentWorkoutId) clearWorkoutProgress(currentWorkoutId);
  currentIndex = 0;
  showScreen(selector);
});

restartBtn.addEventListener('click', () => {
  if (currentWorkoutId) clearWorkoutProgress(currentWorkoutId);
  currentIndex = 0;
  showScreen(selector);
});

showScreen(selector);