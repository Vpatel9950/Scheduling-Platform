export const generateSlots = (start, end, duration) => {
  const slots = [];

  if (!start || !end || !duration || duration <= 0) return slots;

  let current = new Date(`1970-01-01T${start}:00`);
  const endTime = new Date(`1970-01-01T${end}:00`);

  while (current < endTime) {
    const next = new Date(current);
    next.setMinutes(current.getMinutes() + duration);

    // ❗ ensure slot end <= availability end
    if (next > endTime) break;

    const time = current.toTimeString().slice(0, 5);
    slots.push(time);

    current = next;
  }

  return slots;
};