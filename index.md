<body>
<p><img style="display: block; margin: 0 auto; width: 70px;" src="https://fenicsproject.org/pub/graphics/fenics_logo.svg" alt="FEniCS project logo"></p>

<h2 id="latest-release">Latest release</h2>
<h3 id="dolfinx">DOLFINx</h3>

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

<p><code>{{dolfinx_versions | first }}</code> C++: <a href="https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first}}/cpp/">https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first}}/cpp/</a></p>
<p><code>{{dolfinx_versions | first }}</code> Python: <a href="https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first}}/python/">https://docs.fenicsproject.org/dolfinx/{{dolfinx_versions | first}}/python/</a></p>
<h3 id="ffcx">FFCx</h3>
<p><code>{{ffcx_versions | first }}</code>: <a href="https://docs.fenicsproject.org/ffcx/{{ ffcx_versions | first }}">https://docs.fenicsproject.org/ffcx/{{ffcx_versions|first}}</a></p>
<h3 id="basix">Basix</h3>
<p><code>{{basix_versions | first }}</code> C++: <a href="https://docs.fenicsproject.org/basix/{{basix_versions | first }}/cpp/">https://docs.fenicsproject.org/basix/{{basix_versions | first }}/</a></p>
<p><code>{{basix_versions | first }}</code> Python: <a href="https://docs.fenicsproject.org/basix/{{basix_versions | first }}e/python/">https://docs.fenicsproject.org/basix/{{basix_versions | first }}/</a></p>
<h3 id="ufl">UFL</h3>
<p><code>2022.2.0</code>: <a href="https://docs.fenicsproject.org/ufl/2022.2.0">https://docs.fenicsproject.org/ufl/2022.2.0</a></p>
<h2 id="main-development-branches"><code>main</code> (development) branches</h2>
<h4 id="dolfinx-1">DOLFINx</h4>
<p><code>main</code> C++: <a href="https://docs.fenicsproject.org/dolfinx/main/cpp/">https://docs.fenicsproject.org/dolfinx/main/cpp/</a></p>
<p><code>main</code> Python: <a href="https://docs.fenicsproject.org/dolfinx/main/python/">https://docs.fenicsproject.org/dolfinx/main/python/</a></p>
<h4 id="ffcx-1">FFCx</h4>
<p><code>main</code>: <a href="https://docs.fenicsproject.org/ffcx/main">https://docs.fenicsproject.org/ffcx/main</a></p>
<h4 id="basix-1">Basix</h4>
<p><code>main</code>: <a href="https://docs.fenicsproject.org/basix/main/">https://docs.fenicsproject.org/basix/main/</a></p>
<h3 id="ufl-1">UFL</h3>
<p><code>main</code>: <a href="https://docs.fenicsproject.org/ufl/main/">https://docs.fenicsproject.org/ufl/main</a></p>
<h2 id="old-releases">Old releases</h2>
<h3 id="dolfinx-2">DOLFINx</h3>

{% for version in dolfinx_versions %}
<p><code>{{version}}</code> C++: <a href="https://docs.fenicsproject.org/dolfinx/{{version}}/cpp/">https://docs.fenicsproject.org/dolfinx/{{version}}/cpp/</a></p>
<p><code>{{version}}</code> Python: <a href="https://docs.fenicsproject.org/dolfinx/{{version}}/python/">https://docs.fenicsproject.org/dolfinx/{{version}}/python/</a></p>
{% endfor %}

<h3 id="ffcx-2">FFCx</h3>
{% for version in ffcx_versions %}
<p><code>{{version}}</code>: <a href="https://docs.fenicsproject.org/ffcx/{{version}}">https://docs.fenicsproject.org/ffcx/{{version}}</a></p>
{% endfor %}
<h3 id="basix-2">Basix</h3>
{% for version in basix_versions %}
<p><code>{{version}}</code> C++: <a href="https://docs.fenicsproject.org/basix/{{version}}/cpp/">https://docs.fenicsproject.org/basix/{{version}}</a></p>
<p><code>{{version}}</code> Python: <a href="https://docs.fenicsproject.org/basix/{{version}}/python/">https://docs.fenicsproject.org/basix/{{version}}</a></p>
{% endfor %}
<h3 id="ufl-2">UFL</h3>
<p><code>2022.1.0</code>: <a href="https://docs.fenicsproject.org/ufl/2022.1.0">https://docs.fenicsproject.org/ufl/2022.1.0</a></p>
<p><code>old</code>: <a href="https://readthedocs.org/projects/fenics-ufl/">https://readthedocs.org/projects/fenics-ufl/</a></p>
</body>
