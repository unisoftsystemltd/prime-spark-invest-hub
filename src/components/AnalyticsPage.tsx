
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Download, Calendar } from 'lucide-react';

const AnalyticsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const weeklyReports = [
    { week: 'Week 1 - Jan 2025', totalInvested: 125000, returns: 8500, returnPercent: 6.8 },
    { week: 'Week 2 - Jan 2025', totalInvested: 130000, returns: 9200, returnPercent: 7.1 },
    { week: 'Week 3 - Jan 2025', totalInvested: 128000, returns: 7800, returnPercent: 6.1 },
    { week: 'Week 4 - Jan 2025', totalInvested: 135000, returns: 10500, returnPercent: 7.8 },
  ];

  const monthlyReports = [
    { month: 'December 2024', totalInvested: 520000, returns: 35600, returnPercent: 6.8 },
    { month: 'November 2024', totalInvested: 485000, returns: 32800, returnPercent: 6.8 },
    { month: 'October 2024', totalInvested: 465000, returns: 28200, returnPercent: 6.1 },
    { month: 'September 2024', totalInvested: 450000, returns: 31500, returnPercent: 7.0 },
  ];

  const dividendSummary = [
    { fund: 'Halal Equity Fund', dividend: 12500, interestRate: 8.5, lastPayout: '15 Dec 2024' },
    { fund: 'Tech Growth Basket', dividend: 8200, interestRate: 12.2, lastPayout: '10 Dec 2024' },
    { fund: 'Monthly Income Plan', dividend: 15600, interestRate: 6.8, lastPayout: '01 Jan 2025' },
    { fund: 'Secure Income Bond', dividend: 9800, interestRate: 5.5, lastPayout: '20 Dec 2024' },
  ];

  const benchmarkData = [
    { metric: 'Your Portfolio', value: 12.5, comparison: '+3.2% vs DSE' },
    { metric: 'DSE Broad Index', value: 9.3, comparison: 'Market Average' },
    { metric: 'Banking Sector', value: 8.7, comparison: '-0.6% vs Portfolio' },
    { metric: 'Tech Sector', value: 15.8, comparison: '+3.3% vs Portfolio' },
  ];

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-prime-dark">Analytics & Reports</h1>
        <button className="bg-prime-green text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      <Tabs defaultValue="performance" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="dividend">Dividend</TabsTrigger>
          <TabsTrigger value="benchmark">Benchmark</TabsTrigger>
          <TabsTrigger value="tax">Tax Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => setSelectedPeriod('weekly')}
              className={`px-4 py-2 rounded-lg text-sm ${selectedPeriod === 'weekly' ? 'bg-prime-purple text-white' : 'bg-gray-200'}`}
            >
              Weekly
            </button>
            <button 
              onClick={() => setSelectedPeriod('monthly')}
              className={`px-4 py-2 rounded-lg text-sm ${selectedPeriod === 'monthly' ? 'bg-prime-purple text-white' : 'bg-gray-200'}`}
            >
              Monthly
            </button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                {selectedPeriod === 'weekly' ? 'Weekly' : 'Monthly'} Investment Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Total Invested</TableHead>
                    <TableHead>Returns</TableHead>
                    <TableHead>Return %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(selectedPeriod === 'weekly' ? weeklyReports : monthlyReports).map((report, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {selectedPeriod === 'weekly' ? report.week : report.month}
                      </TableCell>
                      <TableCell>৳{report.totalInvested.toLocaleString()}</TableCell>
                      <TableCell className="text-prime-green">+৳{report.returns.toLocaleString()}</TableCell>
                      <TableCell className="text-prime-green">+{report.returnPercent}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dividend" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Dividend & Interest Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fund Name</TableHead>
                    <TableHead>Dividend Received</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Last Payout</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dividendSummary.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.fund}</TableCell>
                      <TableCell className="text-prime-green">৳{item.dividend.toLocaleString()}</TableCell>
                      <TableCell>{item.interestRate}%</TableCell>
                      <TableCell>{item.lastPayout}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benchmark" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Benchmark Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Return %</TableHead>
                    <TableHead>vs Market</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {benchmarkData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.metric}</TableCell>
                      <TableCell className={index === 0 ? 'text-prime-green font-bold' : ''}>
                        {item.value}%
                      </TableCell>
                      <TableCell className={item.comparison.includes('+') ? 'text-prime-green' : 
                        item.comparison.includes('-') ? 'text-red-500' : ''}>
                        {item.comparison}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Tax Report Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Capital Gains (2024)</h4>
                    <p className="text-2xl font-bold text-prime-green">৳45,600</p>
                    <p className="text-sm text-gray-600">Taxable Amount</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Dividend Income (2024)</h4>
                    <p className="text-2xl font-bold text-prime-purple">৳28,200</p>
                    <p className="text-sm text-gray-600">Tax Deducted</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-prime-green text-white px-4 py-2 rounded-lg">
                    Generate Tax Certificate
                  </button>
                  <button className="bg-prime-purple text-white px-4 py-2 rounded-lg">
                    Download TDS Certificate
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;
