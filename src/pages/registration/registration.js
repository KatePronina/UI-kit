import requireAll from 'src/pages/requireAll';

import 'src/components/kit/form/form-init';
import 'src/components/kit/dropdown/dropdown-init';
import 'src/components/kit/slider-range/slider-range-init';
import 'src/components/kit/calendar/calendar-init';

requireAll(require.context('src', true, /\.scss$/));
