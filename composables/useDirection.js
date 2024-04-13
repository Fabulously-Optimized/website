// useDirection.js
import { ref, onMounted } from 'vue';

export function useDirection() {
  const direction = ref('ltr'); // Default direction is 'ltr'

  function setDirection(isRtl) {
    direction.value = isRtl ? 'rtl' : 'ltr';
    // Ensure the code runs only on the client side
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('dir', direction.value);
    }
  }

  return { direction, setDirection };
}
