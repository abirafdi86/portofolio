<template>
  <section class="playground">
    <div class="section-heading">
      <p class="eyebrow">Live UI playground</p>
      <h2>State-driven interface preview</h2>
      <p>
        A small interactive workbench showing how I think about reusable UI states:
        normal, loading, empty, error, and success.
      </p>
    </div>

    <div class="playground-shell">
      <aside class="playground-controls">
        <div>
          <span class="control-label">Component</span>
          <div class="segmented">
            <button
              v-for="option in components"
              :key="option"
              type="button"
              :class="{ active: selectedComponent === option }"
              @click="selectedComponent = option"
            >
              {{ option }}
            </button>
          </div>
        </div>

        <div>
          <span class="control-label">State</span>
          <div class="segmented state-list">
            <button
              v-for="option in states"
              :key="option"
              type="button"
              :class="{ active: selectedState === option }"
              @click="selectedState = option"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </aside>

      <div class="preview-surface">
        <div class="preview-toolbar">
          <span>{{ selectedComponent }} / {{ selectedState }}</span>
          <span class="status-dot" :class="selectedState"></span>
        </div>

        <div v-if="selectedState === 'loading'" class="state-panel">
          <div class="skeleton-preview" aria-label="Loading skeleton preview">
            <span class="skeleton-line wide"></span>
            <div class="skeleton-cards">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="skeleton-line"></span>
            <span class="skeleton-line short"></span>
          </div>
          <strong>Loading interface data</strong>
          <p>Skeleton states keep the layout stable while data is loading.</p>
        </div>

        <div v-else-if="selectedState === 'empty'" class="state-panel">
          <strong>No records found</strong>
          <p>Empty states keep the user oriented and suggest the next action.</p>
        </div>

        <div v-else-if="selectedState === 'error'" class="state-panel error">
          <strong>Unable to load data</strong>
          <p>Show clear feedback and keep the retry path visible.</p>
          <button type="button">Retry request</button>
        </div>

        <div v-else-if="selectedState === 'success'" class="state-panel success">
          <strong>Update completed</strong>
          <p>The interaction is confirmed and the interface can return to normal flow.</p>
        </div>

        <div v-else-if="selectedComponent === 'Dashboard'" class="dashboard-preview">
          <article v-for="card in dashboardCards" :key="card.label">
            <span>{{ card.label }}</span>
            <strong>{{ card.value }}</strong>
            <small>{{ card.caption }}</small>
          </article>
        </div>

        <div v-else-if="selectedComponent === 'Table'" class="table-preview">
          <div class="table-row table-head">
            <span>Module</span>
            <span>Status</span>
            <span>Owner</span>
          </div>
          <div v-for="row in tableRows" :key="row.module" class="table-row">
            <span>{{ row.module }}</span>
            <span>{{ row.status }}</span>
            <span>{{ row.owner }}</span>
          </div>
        </div>

        <form v-else class="form-preview">
          <label>
            Request title
            <input value="Dashboard data sync" readonly>
          </label>
          <label>
            Priority
            <select value="Medium" disabled>
              <option>Medium</option>
            </select>
          </label>
          <label class="wide">
            Notes
            <textarea readonly rows="3">API response mapping and frontend validation are ready for review.</textarea>
          </label>
          <button type="button">Submit preview</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UiPlayground',
  data() {
    return {
      components: ['Dashboard', 'Table', 'Form'],
      dashboardCards: [
        { label: 'Workflow', value: '24', caption: 'active items' },
        { label: 'API health', value: '99%', caption: 'stable response' },
        { label: 'Review', value: '7', caption: 'pending checks' }
      ],
      selectedComponent: 'Dashboard',
      selectedState: 'normal',
      states: ['normal', 'loading', 'empty', 'error', 'success'],
      tableRows: [
        { module: 'DWP', status: 'Maintained', owner: 'Frontend' },
        { module: 'MAPP', status: 'In review', owner: 'Product' },
        { module: 'KKS', status: 'Submitted', owner: 'Compliance' }
      ]
    }
  }
}
</script>

<style scoped>
.playground {
  margin: 3rem 0;
}

.section-heading {
  margin-bottom: 1rem;
  max-width: 760px;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.section-heading h2 {
  color: var(--primary-text);
  font-size: clamp(1.35rem, 2.4vw, 1.95rem);
  margin-bottom: 0.6rem;
}

.section-heading p {
  color: var(--muted-text);
  font-size: 0.96rem;
  line-height: 1.6;
}

.playground-shell {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(220px, 0.65fr) minmax(0, 1.35fr);
}

.playground-controls,
.preview-surface {
  background: var(--surface-strong);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.playground-controls {
  align-self: start;
  display: grid;
  gap: 1.25rem;
  padding: 1rem;
}

.control-label {
  color: var(--muted-text);
  display: block;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
}

.segmented {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.segmented button,
.state-panel button,
.form-preview button {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--accent);
  font-weight: 800;
  padding: 0.5rem 0.7rem;
}

.segmented button.active,
.segmented button:hover,
.state-panel button:hover,
.form-preview button:hover {
  background: var(--accent);
  color: var(--accent-contrast);
}

.preview-surface {
  overflow: hidden;
}

.preview-toolbar {
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  padding: 0.85rem 1rem;
}

.preview-toolbar span:first-child {
  color: var(--muted-text);
  font-size: 0.84rem;
  font-weight: 900;
  text-transform: uppercase;
}

.status-dot {
  background: var(--accent);
  border-radius: 50%;
  height: 10px;
  width: 10px;
}

.status-dot.error {
  background: #ef4444;
}

.status-dot.loading {
  background: #f59e0b;
}

.status-dot.success {
  background: #22c55e;
}

.dashboard-preview,
.table-preview,
.form-preview,
.state-panel {
  padding: 1rem;
}

.dashboard-preview {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.dashboard-preview article {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
}

.dashboard-preview span,
.dashboard-preview small,
.state-panel p,
.table-row span,
.form-preview label {
  color: var(--muted-text);
}

.dashboard-preview strong {
  color: var(--primary-text);
  display: block;
  font-size: 1.55rem;
  margin: 0.35rem 0;
}

.table-preview {
  display: grid;
  gap: 0.5rem;
}

.table-row {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1.2fr 1fr 1fr;
  padding: 0.7rem;
}

.table-head {
  background: var(--surface-soft);
  border-radius: 6px;
  font-weight: 900;
}

.form-preview {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form-preview label {
  display: grid;
  font-weight: 800;
  gap: 0.45rem;
}

.form-preview .wide,
.form-preview button {
  grid-column: 1 / -1;
}

.form-preview input,
.form-preview select,
.form-preview textarea {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--primary-text);
  font: inherit;
  padding: 0.75rem;
}

.state-panel {
  align-items: flex-start;
  display: grid;
  min-height: 220px;
  place-content: center;
  text-align: center;
}

.state-panel strong {
  color: var(--primary-text);
  font-size: 1.1rem;
}

.state-panel.error strong {
  color: #ef4444;
}

.state-panel.success strong {
  color: #22c55e;
}

.skeleton-preview {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1rem;
  max-width: 420px;
  width: min(100%, 420px);
}

.skeleton-line,
.skeleton-cards span {
  animation: shimmer 1.1s ease-in-out infinite;
  background: linear-gradient(90deg, var(--surface-soft), var(--border-color), var(--surface-soft));
  background-size: 220% 100%;
  border-radius: 6px;
  display: block;
}

.skeleton-line {
  height: 14px;
  width: 74%;
}

.skeleton-line.wide {
  height: 20px;
  width: 100%;
}

.skeleton-line.short {
  width: 48%;
}

.skeleton-cards {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(3, 1fr);
}

.skeleton-cards span {
  height: 64px;
}

@keyframes shimmer {
  0% {
    background-position: 120% 0;
  }

  100% {
    background-position: -120% 0;
  }
}

@media (max-width: 850px) {
  .playground-shell,
  .dashboard-preview,
  .form-preview,
  .table-row {
    grid-template-columns: 1fr;
  }
}
</style>
