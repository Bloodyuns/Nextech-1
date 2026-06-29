export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">Endangered Animal Ensemble</h1>
      <p class="lead">Learn about endangered animals around the world and discover what can be done to help protect them.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-list-check me-1"></i>Explore Animals</router-link>

      <h2 class="h4 mt-5">About This Collection</h2>
      <p>
        Our world is facing a biodiversity crisis. Many animal species are on the brink of extinction due to habitat loss, climate change, illegal hunting, and human expansion. This app highlights some of the most critically endangered animals on Earth.
      </p>
      <p>
        For each animal, you'll find information about where they live, how many individuals remain in the wild, and the key threats driving their decline. Understanding these issues is the first step toward making a difference. Whether through supporting conservation organizations, making sustainable choices, or spreading awareness, everyone can help.
      </p>

      <h2 class="h4 mt-5">How to Use This App</h2>
      <ul>
        <li>Click <strong>Explore Animals</strong> above to see the collection</li>
        <li>Click any animal card to learn more details</li>
        <li>Read the location, population status, and threats for each species</li>
      </ul>
    </div>
  `,
};
