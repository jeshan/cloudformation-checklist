let instance = null;
/**
 *
 *
 * @class Analytics
 */
class Analytics {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  addRef() {
    const details = document.querySelectorAll('.js-details');

    details.forEach(detail => {
      const links = detail.querySelectorAll('a');
      links.forEach(link => {
        const ref = 'ref=cloudformationchecklist';
        let append = '';
        let href = '';

        if (link.href.indexOf('?') > 0) {
          append = '&';
        } else {
          append = '?';
        }
        let hashAt = link.href.lastIndexOf('#');
        if (hashAt < 0) {
          href = link.href + append + ref;
        } else {
          href = link.href.substring(0, hashAt) + append + ref;
          href += link.href.substring(hashAt);
        }
        link.setAttribute('href', href);
      });
    });
  }

  enableAnalytics() {
    instance.addRef();
  }
}

const Instance = new Analytics();
Object.freeze(Instance);
export default Analytics;
