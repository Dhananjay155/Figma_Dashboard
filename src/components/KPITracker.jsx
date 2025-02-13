import { FileText, CheckCircle } from 'lucide-react';
import { Header } from './Header';
import { KPICard } from './KPICard';
import { RejectionTable } from './RejectionTable';
import { SplitChart, RejectionPieChart } from './Charts';

const KPITracker = () => {
  const mockData = {
    applications: [
      { value: 'app1', label: 'Application 1' },
      { value: 'app2', label: 'Application 2' },
      { value: 'app3', label: 'Application 3' }
    ],
    lineNumbers: [
      { value: 'line1', label: 'Line 1' },
      { value: 'line2', label: 'Line 2' },
      { value: 'line3', label: 'Line 3' }
    ],
    rejectionReasons: [
      { value: 'wrong_price', label: 'Incorrect Price' },
      { value: 'wrong_coding', label: 'Missing Coding' }
    ],
    tableData: [
      { id: 1, application: 'Application 1', lineNumber: 'Line 1', product: 'Party Pack', rejectionReason: 'Wrong Coding', quantity: 10, time: '01/02/2024' },
      { id: 2, application: 'Application 2', lineNumber: 'Line 2', product: 'Tub', rejectionReason: 'Wrong Price', quantity: 12, time: '01/02/2024' },
      { id: 3, application: 'Application 3', lineNumber: 'Line 3', product: 'Party Pack', rejectionReason: 'Wrong Factory Code', quantity: 8, time: '01/02/2024' }
    ],
    splitData: [
      { name: 'Party Pack', passed: 90, rejected: 65 },
      { name: 'Tub', passed: 55, rejected: 92 }
    ],
    pieData: [
      { name: 'Incorrect Price', value: 52 },
      { name: 'Missing Coding', value: 48 }
    ]
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      
    
      <div className="p-4">
        <div className="row g-4">
          <KPICard 
            icon={FileText}
            title="Units Processed"
            value="2,575"
            bgColor="bg-primary rounded-circle"
          />
          <KPICard 
            icon={CheckCircle}
            title="Units Passed"
            value="814"
            bgColor="bg-primary rounded-circle"
          />
          <KPICard 
            icon={FileText}
            title="Units Rejected"
            value="12"
            bgColor="bg-primary rounded-circle"
          />
          <KPICard 
            icon={FileText}
            title="Throughput (Units/Entry)"
            value="110.41"
            bgColor="bg-primary rounded-circle"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <SplitChart data={mockData.splitData} />
          </div>
          <div className="col-md-6">
            <RejectionPieChart data={mockData.pieData} />
          </div>
        </div>
        
        <RejectionTable data={mockData.tableData} />
      </div>
    </div>
  );
};

export default KPITracker;