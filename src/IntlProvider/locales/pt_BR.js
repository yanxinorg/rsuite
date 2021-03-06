const Calendar = {
  sunday: 'Do',
  monday: 'Se',
  tuesday: 'Te',
  wednesday: 'Qu',
  thursday: 'Qu',
  friday: 'Se',
  saturday: 'Sá',
  ok: 'OK',
  today: 'Hoje',
  yesterday: 'Ontem',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos'
};

export default {
  Pagination: {
    more: 'Mais',
    prev: 'Anterior',
    next: 'Próximo',
    first: 'Primeiro',
    last: 'Último'
  },
  Table: {
    emptyMessage: 'Nenhum dado encontrado',
    loading: 'Carregando...'
  },
  TablePagination: {
    lengthMenuInfo: '{0} / página',
    totalInfo: 'total: {0}'
  },
  DatePicker: {
    ...Calendar
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: 'Últimos 7 dias'
  },
  Picker: {
    placeholder: 'Selecionar',
    searchPlaceholder: 'Pesquisar'
  },
  CheckPicker: {
    selectedValues: '{0} selecionado'
  },
  CheckTreePicker: {
    selectedValues: '{0} selecionado'
  },
  InputPicker: {
    noResultsText: 'Nenhum resultado encontrado',
    newItem: 'Novo item',
    createOption: 'Criar opção "{0}"'
  },
  Uploader: {
    inited: 'Inicializado',
    progress: 'Em progresso',
    error: 'Erro',
    complete: 'Finalizado',
    emptyFile: 'Em branco',
    upload: 'Upload'
  }
};
