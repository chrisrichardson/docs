---
pagetitle: FEniCSx Project Documentation
header-includes:
    <link rel="shortcut icon" type="image/x-icon" href="https://fenicsproject.org/favicon.ico"/>
---


{% for file in site.static_files %}
 {% assign fp = file.path | split: "/" %}
 {% assign w = fp[2] | slice: 0 %}
 {% if w == "v" %}

  {% if fp[1] == "dolfinx" %}
   {% assign dolfinx_versions = dolfinx_versions | append: fp[2] | append: " " %}
  {% endif %}

  {% if fp[1] == "ffcx" %}
   {% assign ffcx_versions = ffcx_versions | append: fp[2] | append: " " %}
  {% endif %}

  {% if fp[1] == "basix" %}
   {% assign basix_versions = basix_versions | append: fp[2] | append: " " %}
  {% endif %}

{% endif %}

{% endfor %}

{% assign dolfinx_versions = dolfinx_versions | split: " " | sort | uniq | reverse %}
{% assign ffcx_versions = ffcx_versions | split: " " | sort | uniq | reverse %}
{% assign basix_versions = basix_versions | split: " " | sort | uniq | reverse %}


<img style="display: block; margin: 0 auto; width: 70px;" src="https://fenicsproject.org/pub/graphics/fenics_logo.svg" alt="FEniCS project logo">

## Latest release

### DOLFINx

`{{dolfinx_versions | first }}` C++: [https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first }}/cpp/](dolfinx/{{dolfinx_versions | first }}/cpp/)

`{{dolfinx_versions | first }}` Python: [https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first }}/python/](dolfinx/{{dolfinx_versions | first }}/python/)

### FFCx

`{{ffcx_versions | first }}`: [https://docs.fenicsproject.org/ffcx/{{ffcx_versions | first }}](ffcx/{{ffcx_versions | first }})

### Basix

`{{basix_versions | first }}` C++: [https://docs.fenicsproject.org/basix/{{basix_versions | first }}](basix/{{basix_versions | first }}/cpp/)

`{{basix_versions | first }}` Python: [https://docs.fenicsproject.org/basix/{{basix_versions | first }}](basix/{{basix_versions | first }}/python/)

### UFL

`2022.2.0`: [https://docs.fenicsproject.org/ufl/2022.2.0](https://docs.fenicsproject.org/ufl/2022.2.0)

## `main` (development) branches

#### DOLFINx

`main` C++: [https://docs.fenicsproject.org/dolfinx/main/cpp/](dolfinx/main/cpp/)

`main` Python: [https://docs.fenicsproject.org/dolfinx/main/python/](dolfinx/main/python/)

#### FFCx

`main`: [https://docs.fenicsproject.org/ffcx/main](ffcx/main)

#### Basix

`main`: [https://docs.fenicsproject.org/basix/main/](basix/main)

### UFL

`main`: [https://docs.fenicsproject.org/ufl/main](ufl/main)

## Old releases

#### DOLFINx

{% for version in dolfinx_versions %}
`{{version}}` C++: [https://docs.fenicsproject.org/dolfinx/{{version}}/cpp/](dolfinx/{{version}}/cpp/)

`{{version}}` Python: [https://docs.fenicsproject.org/dolfinx/{{version}}/python/](dolfinx/{{version}}/python/)

{% endfor %}


#### FFCx

{% for version in ffcx_versions %}
`{{version}}`: [https://docs.fenicsproject.org/ffcx/{{version}}](ffcx/{{version}})
{% endfor %}

#### Basix

{% for version in basix_versions %}
`{{version}}` C++: [https://docs.fenicsproject.org/basix/{{version}}/](basix/{{version}}/cpp/)

`{{version}}` Python: [https://docs.fenicsproject.org/basix/{{version}}/](basix/{{version}}/python/)
{% endfor %}

#### UFL

`2022.1.0`: [https://docs.fenicsproject.org/ufl/2022.1.0](https://docs.fenicsproject.org/ufl/2022.1.0)

`old`: [https://readthedocs.org/projects/fenics-ufl/](https://readthedocs.org/projects/fenics-ufl/)
