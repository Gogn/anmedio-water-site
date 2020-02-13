import { configure } from '@storybook/react';
import '../src/index.css';

//Импорт всех историй из подкаталогов в ../src/Components
configure(require.context('../src/Components', true, /\.stories\.js$/), module);