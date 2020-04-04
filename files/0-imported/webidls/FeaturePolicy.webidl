// https://w3c.github.io/webappsec-feature-policy/#the-policy-object
[Exposed=Window]
interface FeaturePolicy {
  boolean allowsFeature(DOMString feature, optional DOMString origin);
  sequence<DOMString> features();
  sequence<DOMString> allowedFeatures();
  sequence<DOMString> getAllowlistForFeature(DOMString feature);
};
