# fix-the-hub

A WebExtension to make the hub usable

## To make more space in smaller screens:

After page load, it should remove

* `footer class="ng-scope"`
* The breadcrumbs on top (TODO: find the CSS selector)

Also should remove the hardcoded `margin-bottom` in `section class="page"`
