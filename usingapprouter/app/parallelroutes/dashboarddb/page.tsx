"use client"




import { useRouter } from 'next/navigation';
import AnalyticsPage from '../@analytics/analysis/page';
import TeamsPage from '../@team/teams/page';

export default function DashboardPage() {

    const router = useRouter();

    const goToAnalytics = () => {
        router.push('/@analytics/analysis');
      };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Analytics</h2>
        <AnalyticsPage />
        <button onClick={goToAnalytics}>Go to Analytics</button>
      </div>
      <div>
        <h2>Teams</h2>
        <TeamsPage />
      </div>
    </div>
  );
}