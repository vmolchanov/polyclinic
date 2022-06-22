<script>
export default {
  methods: {
    getFullName({lastName, firstName, secondName}) {
      return `${lastName} ${firstName[0]}.${secondName ? secondName[0] + '.' : ''}`;
    },
    getDate(rawDate) {
      const date = new Date(rawDate);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    }
  },
}
</script>
