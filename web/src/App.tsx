import { DateTimeUtil } from './utils';
DateTimeUtil.setLocale()

import './styles/global.css';
import { Header, SummaryTable } from './components';

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}
