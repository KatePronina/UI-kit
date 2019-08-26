import requireAll from '../requireAll';

import '../../components/kit/form/form-init';
import '../../components/kit/dropdown/dropdown-init';
import '../../components/kit/slider-range/slider-range-init';
import '../../components/kit/calendar/calendar-init';

requireAll(require.context('../../', true, /\.scss$/));
