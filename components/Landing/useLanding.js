import ga from 'utils/ga';
import Router from 'next/router';

export default function useLanding() {
  const trackComingSoonClick = e => {
    e.preventDefault();

    ga('event', 'view', {
      event_category: 'CTA',
      event_label: 'Coming Soon Call to Action',
      non_interaction: true
    });

    Router.push('/escolha-seu-time/');
  };

  return {
    trackComingSoonClick
  };
}
